import { useNavigate, useParams } from 'react-router-dom';
import BlogForm from 'components/blog/BlogForm';

function PageBlogForm() {
  const navigate = useNavigate();

  const { postId } = useParams();

  return (
    <BlogForm
      postId={postId}
      handleDidSave={(savedPost) => navigate(`/blog/${savedPost.id}/`)}
    />
  );
}

export default PageBlogForm;
