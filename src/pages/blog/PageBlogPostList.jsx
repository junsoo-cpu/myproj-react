import Button from 'components/Button';
import H2 from 'components/H2';
import BlogList from 'components/blog/BlogList';
import { useNavigate } from 'react-router-dom';

// 뉴스 서비스의 대문 페이지
function PageBlogPostList() {
  const navigate = useNavigate();
  return (
    <div>
      <H2>블로그 페이지</H2>
      <BlogList />
      <Button
        onClick={() => {
          navigate('/blog/new/');
        }}
      >
        새 포스팅 쓰기
      </Button>
    </div>
  );
}

export default PageBlogPostList;
