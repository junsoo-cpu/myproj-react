import { useParams } from 'react-router-dom';
import BlogDetail from 'components/blog/BlogDetail';

function PageDetail() {
  const { postId } = useParams();

  return (
    <div>
      <h2>블로그#{postId} 보여주기</h2>
      <BlogDetail postId={postId} />
    </div>
  );
}

export default PageDetail;
