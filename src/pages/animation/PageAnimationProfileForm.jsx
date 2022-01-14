import ProfileForm from 'components/animation/ProfileForm';
import { useNavigate, useParams } from 'react-router-dom';

function PageAnimationProfileForm() {
  const navigate = useNavigate();

  const { profileId } = useParams();

  return (
    <ProfileForm
      profileId={profileId}
      handleDidSave={(savedPost) => navigate(`/animation/${savedPost.id}/`)}
    />
  );
}

export default PageAnimationProfileForm;
