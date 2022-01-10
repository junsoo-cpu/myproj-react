import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import BlogForm from 'components/BlogForm';
import useFieldValues from 'hooks/useFieldValues';
import { useEffect, useState } from 'react/cjs/react.development';

function PageBlogForm() {
  // 상탯값 정의. 훅 호출
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { blogId } = useParams();
  const { fieldValues, handleFieldChange, clearFieldValues, setFieldValues } =
    useFieldValues({
      title: '',
      content: '',
    });

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);

      const url = `http://localhost:8000/blog/api/posts/${blogId}/`;
      try {
        const response = await Axios.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    if (blogId) fetchBlog();
    else clearFieldValues();
  }, [blogId]);

  // 다양한 함수를 정의
  const saveBlog = async () => {
    setLoading(true);
    setError(null);

    const url = !blogId
      ? 'http://localhost:8000/blog/api/posts/'
      : `http://localhost:8000/blog/api/posts/${blogId}/`;

    try {
      if (!blogId) {
        await Axios.post(url, fieldValues);
      } else {
        await Axios.put(url, fieldValues);
      }
      navigate('/blog/');
    } catch (e) {
      setError(e);
      console.error(e);
    }
    setLoading(false);
  };
  // 표현 by jsx
  return (
    <div>
      <h2>
        BlogForm
        {blogId ? '수정' : '생성'}
      </h2>
      <BlogForm
        fieldValues={fieldValues}
        handleFieldChange={handleFieldChange}
        handleSubmit={saveBlog}
        loading={loading}
      />
      <DebugStates blogId={blogId} fieldValues={fieldValues} />
    </div>
  );
}
export default PageBlogForm;
