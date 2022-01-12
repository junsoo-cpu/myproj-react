import ArticleDetail from 'components/news/ArticleDetail';
import ArticleList from 'components/news/ArticleList';
import { useParams } from 'react-router-dom';

function PageNewsIndex() {
  const { articleId } = useParams;
  return (
    <div>
      <h2>뉴기사{articleId} 보여주기</h2>
      <ArticleDetail articleId={articleId} />

      <h2>뉴스 페이지</h2>
      <ArticleList />
      <h2>뉴스 추천</h2>

      <h2>광고</h2>
    </div>
  );
}

export default PageNewsIndex;
