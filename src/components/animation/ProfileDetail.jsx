import { useApiAxios } from 'api/base';
import LoadingIndicator from 'components/LoadingIndicator';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function ProfileDetail({ profileId }) {
  const navigate = useNavigate();

  const [{ data: profile, loading, error }, refetch] = useApiAxios(
    `/animation/api/profile/${profileId}/`,
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteArticle] =
    useApiAxios(
      {
        url: `/animation/api/profile/${profileId}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      // REST API 에서는 DELETE 요청에 대한 응답이 없습니다.
      deleteArticle().then(() => {
        navigate('/animation/');
        toast.info('🙏삭제되었습니다.', {
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
        `로딩 중 에러가 발생했습니다. (${error.response.status} ${error.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생했습니다. (${deleteError.response.status} ${deleteError.response.statusText})`}
      {profile && (
        <>
          <h3 className="text-2xl my-5">{profile.name}</h3>
          {profile.photo && <img src={profile.photo} alt="" />}
          <div>
            {profile.description.split(/[\r\n]+/).map((line, index) => (
              <p className="my-3" key={index}>
                {line}
              </p>
            ))}
          </div>
        </>
      )}
      <hr className="my-3" />
      <div className="flex gap-4 mt-3 mb-10">
        <Link to="/animation/" className="hover:text-red-400">
          목록으로
        </Link>
        <Link
          to={`/animation/${profileId}/edit/`}
          className="hover:text-red-400"
        >
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
export default ProfileDetail;
