import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react';
import BlogSummary from './BlogSummary';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogList() {
  const [{ data: blogList, loading, error }, refetch] =
    useApiAxios('/blog/api/posts/');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <div>
        <h2>블로그</h2>
        {loading && '로딩 중...'}
        {error && '로딩 중 에러가 발생했습니다.'}
        {blogList && blogList.map((post) => <BlogSummary post={post} />)}
      </div>
      <ToastContainer />
      <DebugStates blogList={blogList} loading={loading} error={error} />
    </div>
  );
}

export default BlogList;
