import { Link } from 'react-router-dom';

function ProfileSummary({ profile }) {
  return (
    <div>
      소개 :
      {profile.photo && (
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-5 h-5 mr-1 rounded inline"
        />
      )}
      <Link to={`/animation/${profile.id}/`}>
        이름 : {profile.name}
        생일 : {profile.birth}
        나이 : {profile.age} 키 : {profile.height}
        취미 : {profile.hobby}
      </Link>
    </div>
  );
}

export default ProfileSummary;
