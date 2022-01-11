import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { axiosInstance } from 'api/base';

function PageDetail() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [viewPost, setViewPost] = useState([]);

  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = `/blog/api/posts/${postId}`;
    // Promise 객체
    axiosInstance
      .get(url)
      .then(({ data }) => {
        setViewPost(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Post detail</h2>
      {loading && <div>Loading ...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}
      <div class="m-auto max-w-xl">
        <div class="bg-white shadow-2xl">
          <div>
            <img src="https://placeimg.com/640/480/animals" alt="" />
          </div>
          <div class="px-4 py-2 mt-2 bg-white">
            <h2 class="font-bold text-2xl text-gray-800">{viewPost.title}</h2>
            <p class="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
              {viewPost.content}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <br></br>
      <button
        onClick={() => navigate(`/blog/`)}
        className=" bg-blue-400 hover:bg-red-400 mr-1"
      >
        뒤로가기
      </button>
      <DebugStates loading={loading} error={error} postList={viewPost} />
    </div>
  );
}

export default PageDetail;
