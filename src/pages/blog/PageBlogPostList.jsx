import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';

function PageBlogPostList() {
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const [pageBlogPostList, setPageBlogPostList] = useState([]);
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoding(true);
    setError(null);

    const url = 'http://localhost:8000/blog/api/posts/';
    Axios.get(url)
      .then((data) => {
        console.group('정상 응답');
        console.log(data);
        console.groupEnd();
        setPageBlogPostList(data);
      })
      .catch((error) => {
        console.group('에러 응답');
        console.log(error);
        console.groupEnd();
      })
      .finally(() => {
        setLoding(false);
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
