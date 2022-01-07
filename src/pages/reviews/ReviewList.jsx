import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';

function PageReviewList() {
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoding(true);
    setError(null);

    const url = 'http://127.0.0.1:8000/shop/api/reviews/';
    Axios.get(url)
      .then((data) => {
        console.group('정상 응답');
        console.log(data);
        console.groupEnd();
        setReviewList(data);
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
      <h2>ReviewList</h2>

      {loading && <div>Loading ...</div>}
      {error && <div>통신 중 오류가 발생 ...</div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-red-400"
      >
        새로 고침
      </button>
      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}

export default PageReviewList;
