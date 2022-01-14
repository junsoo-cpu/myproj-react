import DebugStates from 'components/DebugStates';
import ProfileSummary from './ProfileSummary';
import { useApiAxios } from 'api/base';
import { useEffect } from 'react';

function ProfileList() {
  const [{ data: profileList, loading, error }, refetch] = useApiAxios(
    '/animation/api/profile/',
  );

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      <h3>캐릭터 목록을 보여줍니다.</h3>
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}
      {profileList &&
        profileList.map((profile) => <ProfileSummary profile={profile} />)}
      <DebugStates profileList={profileList} loading={loading} error={error} />
    </div>
  );
}

export default ProfileList;
