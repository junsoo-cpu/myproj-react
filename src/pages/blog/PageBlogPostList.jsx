import BlogList from 'components/blog/BlogList';
import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostDetail from 'components/blog/PostDetail';
import { axiosInstance } from 'api/base';

function PageBlogPostList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageBlogPostList, setPageBlogPostList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = `/blog/api/posts/`;
    axiosInstance
      .get(url)
      .then(({ data }) => {
        setPageBlogPostList(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteBlog = (deletingBlog) => {
    const { id: deletingBlogId } = deletingBlog;
    const url = `/blog/api/posts/${deletingBlogId}/`;

    setLoading(true);
    setError(null);

    axiosInstance
      .delete(url)
      .then(() => {
        console.log('삭제 성공');
        // 선택지 #1) 삭제된 항목만 상탯값에서 제거
        setPageBlogPostList((prevPageBlogPostList) =>
          prevPageBlogPostList.filter((blog) => blog.id !== deletingBlogId),
        );
        // 선택지 #2) 전체를 새로고침
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const detailBlog = (detailingBlog) => {
    const { id: detailingBlogId } = detailingBlog;
    const url = `/blog/api/posts/${detailingBlogId}/`;
    setLoading(true);
    setError(null);
    axiosInstance
      .get(url)
      .then(() => {
        console.log('불러오기 성공');
        setPageBlogPostList((prevBlogList) =>
          prevBlogList.filter((blog) => blog.id === detailingBlogId),
        );
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>BLOG</h2>

      {loading && <div>Loading ...</div>}
      {error && <div>통신 중 오류가 발생 ...</div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-red-400 mr-2"
      >
        새로 고침
      </button>

      <button
        onClick={() => navigate('/blog/new/')}
        className="bg-blue-400 hover:bg-slate-400"
      >
        새 리뷰
      </button>

      <div className="">
        {pageBlogPostList.map((blog) => (
          <BlogList
            key={blog.id}
            blog={blog}
            navigate={navigate}
            handleEdit={() => navigate(`/blog/${blog.id}/edit/`)}
            handleDelete={() => deleteBlog(blog)}
          />
        ))}
      </div>

      <hr />
      <DebugStates
        loading={loading}
        error={error}
        PageBlogPostList={pageBlogPostList}
      />
    </div>
  );
}

export default PageBlogPostList;
