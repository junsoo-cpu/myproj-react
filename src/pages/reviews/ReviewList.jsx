import DebugStates from 'components/DebugStates';
import Review from 'components/Review';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from 'api/base';

function PageReviewList() {
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    refetch();
  }, []);
  const refetch = () => {
    setError(null);
    setLoading(true);
    const url = `/shop/api/reviews/`;
    // Promise 객체 --> then, catch 지원, 체이닝 가능
    axiosInstance
      .get(url)
      .then(({ data }) => {
        console.group('정상 응답');
        console.log(data);
        console.groupEnd();
        setReviewList(data);
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
  const editReview = (editingReview) => {
    navigate(`/reviews/${editingReview.id}/edit/`);
  };

  const deleteReview = (deletingReview) => {
    const { id: deletingReviewId } = deletingReview;
    const url = `/shop/api/reviews/${deletingReviewId}/`;

    setLoading(true);
    setError(null);

    axiosInstance
      .delete(url)
      .then(() => {
        console.log('삭제 성공');
        // 선택1 : 삭제된 항목만 상탯값에서 제거
        setReviewList((prevReviewList) =>
          prevReviewList.filter((review) => review.id !== deletingReviewId),
        );
        // 선택2 : 전체를 새로고침
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
      <h2>Review List</h2>
      {loading && <div>Loading...</div>}
      {error && <div>통신 중에 오류가 발생했습니다.</div>}
      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-red-300 mr-2 rounded p-2"
      >
        새로고침
      </button>
      <button
        onClick={() => navigate('/reviews/new/')}
        className="bg-blue-400 hover:bg-slate-400 rounded p-2"
      >
        새 리뷰
      </button>
      {reviewList.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleEdit={() => editReview(review)}
          handleDelete={() => deleteReview(review)}
        />
      ))}
      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}
export default PageReviewList;
