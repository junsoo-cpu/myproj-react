import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApiAxios } from 'api/base';
import LoadingIndicator from 'components/LoadingIndicator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogDetail({ postId }) {
  const navigate = useNavigate();

  const [{ data: post, loading, error }, refetch] = useApiAxios(
    `/blog/api/posts/${postId}/`,
  );

  const [{ loading: deleteLoading, error: deleteError }, deletePost] =
    useApiAxios(
      {
        url: `/blog/api/posts/${postId}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure?')) {
      // REST API 에서는 DELETE 요청에 대한 응답이 없습니다.
      deletePost().then(() => {
        navigate('/blog/');
        toast.info('🦄 삭제되었습니다. 🦄', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중 ...</LoadingIndicator>}
      {error &&
        `로딩 중 에러가 발생했습니다. (${error.response?.status} ${error.response?.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생했습니다. (${deleteError.response?.status} ${deleteError.response?.statusText})`}
      {post && (
        <>
          <div className="max-w-sm rounded lg:max-w-full overflow-hidden shadow-lg">
            <img
              className="w-full rounded-t-lg"
              src="https://placeimg.com/640/480/animalsg"
              alt=""
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.title}</div>

              {post.content.split(/[\r\n]+/).map((line, index) => (
                <p className="my-3 text-gray-700 text-base" key={index}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </>
      )}

      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/blog/" className="hover:text-red-400">
          목록으로
        </Link>
        <Link to={`/blog/${postId}/edit/`} className="hover:text-red-400">
          수정하기
        </Link>
        <button
          disabled={deleteLoading}
          onClick={handleDelete}
          className="hover:text-red-400"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default BlogDetail;
