import { Link } from 'react-router-dom';

function ProfileSummary({ profile }) {
  return (
    <div>
      소개 :
      <Link to={`/animation/${profile.id}/`}>
        이름 : {profile.name}
        생일 : {profile.birth}
        취미 : {profile.age}
        나이 : {profile.height}
        취미 : {profile.hobby}
      </Link>
    </div>
  );
}

export default ProfileSummary;
