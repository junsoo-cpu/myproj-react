import ProfileDetail from 'components/animation/ProfileDetail';
import { useParams } from 'react-router-dom';

function PageAnimationProfileDetail() {
  const { profileId } = useParams();

  return (
    <div>
      <h2>캐릭터 #{profileId} </h2>
      <ProfileDetail profileId={profileId} />
    </div>
  );
}

export default PageAnimationProfileDetail;
