import ProfileForm from 'components/animation/ProfileForm';
import { useNavigate } from 'react-router-dom';

function PageAnimationProfileForm() {
  const navigate = useNavigate();

  return (
    <ProfileForm
      profileId={null}
      handleDidSave={(savedPost) => navigate(`/animation/${savedPost.id}/`)}
    />
  );
}

export default PageAnimationProfileForm;
