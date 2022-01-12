import { useParams } from 'react-router-dom';
import BlogDetail from 'components/blog/BlogDetail';

function PageDetail() {
  const { postId } = useParams();

  return (
    <div>
      <h2>블로그#{postId}</h2>
      <BlogDetail postId={postId} />
    </div>
  );
}

export default PageDetail;
