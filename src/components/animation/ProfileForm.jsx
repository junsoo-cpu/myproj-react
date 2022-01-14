import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import H2 from 'components/H2';
import LoadingIndicator from 'components/LoadingIndicator';
import useFieldValues from 'hooks/useFieldValues';
import { useApiAxios } from 'api/base';
import { useEffect } from 'react/cjs/react.development';
const INIT_FIELD_VALUES = {
  name: '',
  description: '',
  birth: '',
  age: '',
  height: '',
  hobby: '',
};
// !articleId : 생성
// articleId  : 수정
function ProfileForm({ profileId, handleDidSave }) {
  // articleId 값이 있을 때에만 조회
  // articleId => manual=false
  // !articleId => manual=true
  const [{ data: profile, loading: getLoading, error: getError }] = useApiAxios(
    `/animation/api/profile/${profileId}/`,
    { manual: !profileId },
  );
  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !profileId
        ? '/animation/api/profile/'
        : `/animation/api/profile/${profileId}/`,
      method: !profileId ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues(
    profile || INIT_FIELD_VALUES,
  );

  useEffect(() => {
    // 서버로 photo=null이 전달이 되면, 아래 오류가 발생
    //   - The submitted data was not a file. Check the encoding type on the form.
    //   - 대응 : fieldValues에서 photo만 제거해주거나, photo=null이라면 빈 문자열로 변경
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      photo: '',
    }));
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // fieldValues : 객체 (except 파일)
    // 파일을 업로드할려면, FormData 인스턴스를 써야합니다.
    const formData = new FormData();
    Object.entries(fieldValues).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        const fileList = value;
        fileList.forEach((file) => formData.append(name, file));
      } else {
        formData.append(name, value);
      }
    });
    saveRequest({
      data: formData,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) handleDidSave(savedPost);
    });
  };
  return (
    <div>
      <H2>profile Form</H2>
      {saveLoading && <LoadingIndicator>저장 중 ...</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다. (${saveError.response.status} ${saveError.response.statusText})`}
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          이름
          <input
            name="name"
            value={fieldValues.name}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.name?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          소개
          <textarea
            name="description"
            value={fieldValues.content}
            onChange={handleFieldChange}
            className="p-1 bg-gray-100 w-full h-80 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.description?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          생일
          <input
            name="birth"
            value={fieldValues.birth}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.birth?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          나이
          <input
            name="age"
            value={fieldValues.age}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.age?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          키
          <input
            name="height"
            value={fieldValues.height}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.height?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          취미
          <input
            name="hobby"
            value={fieldValues.hobby}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages.hobby?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            // value=""
            onChange={handleFieldChange}
          />
          {saveErrorMessages.photo?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <Button>저장하기</Button>
        </div>
      </form>
      <DebugStates
        profile={profile}
        getLoading={getLoading}
        getError={getError}
        saveErrorMessages={saveErrorMessages}
        fieldValues={fieldValues}
      />
    </div>
  );
}
export default ProfileForm;
