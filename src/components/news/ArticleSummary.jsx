import { Link } from 'react-router-dom';

function ArticleSummary({ article }) {
  return (
    <div>
      {article.photo && (
        <img
          src={article.photo}
          alt={article.title}
          className="=mr-1 w-10 h-10 inline"
        />
      )}
      요약 : <Link to={`/news/${article.id}/`}>{article.title}</Link>
    </div>
  );
}

export default ArticleSummary;
