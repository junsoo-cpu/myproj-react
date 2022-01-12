import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react/cjs/react.development';
import BlogSummary from './BlogSummary';

function BlogList() {
  const [{ data: blogList, loading, error }, refetch] =
    useApiAxios('/blog/api/posts/');

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h2>블로그</h2>
      {loading && '로딩 중...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {blogList && blogList.map((post) => <BlogSummary post={post} />)}
      <DebugStates blogList={blogList} loading={loading} error={error} />
    </div>
  );
}

export default BlogList;
