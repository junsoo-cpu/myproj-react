import { Link } from 'react-router-dom';

function BlogSummary({ post }) {
  return (
    <div>
      요약 : <Link to={`/blog/${post.id}/`}>{post.title}</Link>
    </div>
  );
}

export default BlogSummary;
