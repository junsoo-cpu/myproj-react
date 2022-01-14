import ProfileList from 'components/animation/ProfileList';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';

function PageAnimationIndex() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>프로필</h2>
      <ProfileList />
      <Button onClick={() => navigate('/animation/new/')}>
        새 포스팅 쓰기
      </Button>
    </div>
  );
}

export default PageAnimationIndex;
