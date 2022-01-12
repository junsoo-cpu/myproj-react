import { useApiAxios } from 'api/base';
import DebugStates from 'components/DebugStates';
import { useEffect } from 'react/cjs/react.development';
import ArticleSummary from './ArticleSummary';

function ArticleList() {
  const [{ data: articleList, loading, error }, refetch] = useApiAxios(
    '/news/api/articles/',
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h2>뉴스 기사 목록을 보여줄 것이다.</h2>
      {loading && '로딩 중...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {articleList &&
        articleList.map((article) => <ArticleSummary article={article} />)}
      <DebugStates articleList={articleList} loading={loading} error={error} />
    </div>
  );
}

export default ArticleList;
