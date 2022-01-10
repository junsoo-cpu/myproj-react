import Axios from 'axios';
import BlogList from 'components/BlogList';
import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';

function PageBlogPostList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageBlogPostList, setPageBlogPostList] = useState([]);
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = 'http://localhost:8000/blog/api/posts/';
    Axios.get(url)
      .then(({ data }) => {
        console.group('정상 응답');
        console.log(data);
        console.groupEnd();
        setPageBlogPostList(data);
      })
      .catch((error) => {
        console.group('에러 응답');
        console.log(error);
        console.groupEnd();
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteBlog = (deletingBlog) => {
    const { id: deletingBlogId } = deletingBlog;
    const url = `http://localhost:8000/blog/api/posts/${deletingBlogId}/`;

    setLoading(true);
    setError(null);

    Axios.delete(url)
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

  return (
    <div>
      <h2>BLOG</h2>

      {loading && <div>Loading ...</div>}
      {error && <div>통신 중 오류가 발생 ...</div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-red-400"
      >
        새로 고침
      </button>

      <div className="">
        {pageBlogPostList.map((blog) => (
          <BlogList
            key={blog.id}
            blog={blog}
            handleDelete={() => deleteBlog(blog)}
          />
        ))}
      </div>

      <hr />
      <DebugStates
        loading={loading}
        error={error}
        reviewList={pageBlogPostList}
      />
    </div>
  );
}

export default PageBlogPostList;
