import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import { useApiAxios } from 'api/base';
import useFieldValues from 'hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const INITIAL_FIELD_VALUES = { username: '', password: '', password2: '' };

function LoginForm() {
  const navigate = useNavigate();

  const [auth, _, login] = useAuth();

  const [{ loading, error }, requestToken] = useApiAxios(
    {
      url: '/accounts/api/signup/',
      method: 'POST',
    },
    { manual: true },
  );
  const { fieldValues, handleFieldChange } =
    useFieldValues(INITIAL_FIELD_VALUES);
  const handleSubmit = (e) => {
    e.preventDefault();

    requestToken({ data: fieldValues }).then(() => {
      navigate('/accounts/login');
    });
  };
  return (
    <div>
      <h2>Login</h2>
      {error?.response?.status === 401 && (
        <div className="text-red-400">로그인에 실패했습니다.</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <input
            type="text"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            placeholder="username"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div className="my-3">
          <input
            type="password"
            name="password"
            value={fieldValues.password}
            onChange={handleFieldChange}
            placeholder="passowrd"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <div className="my-3">
          <input
            type="password"
            name="password2"
            value={fieldValues.password2}
            onChange={handleFieldChange}
            placeholder="passowrd"
            className="p-3 bg-gray-100 focus:outline-none focus:border focus:border-gray-400 w-full"
          />
        </div>
        <Button>회원가입</Button>
      </form>

      <DebugStates auth={auth} fieldValues={fieldValues} />
    </div>
  );
}
export default LoginForm;
