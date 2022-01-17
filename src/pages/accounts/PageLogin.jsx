// input[type=text]     name=username
//input[type=password]  name=password

import { useApiAxios } from 'api/base';
import useFieldValues from 'hooks/useFieldValues';

const INITIAL_FIELD_VALUES = { username: '', password: '' };

function PageLogin() {
  const [{ data, loading, error }, refetch] = useApiAxios(
    {
      url: '/accounts/api/token/',
      method: 'POST',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } =
    useFieldValues(INITIAL_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch({ data: fieldValues }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          username
          <input
            name="username"
            onChange={handleFieldChange}
            value={fieldValues.username}
            type="text"
            className="m-2 p-1 bg-gray-100 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
        </div>
        <div>
          password
          <input
            name="password"
            onChange={handleFieldChange}
            value={fieldValues.password}
            type="password"
            className="m-2 p-1 bg-gray-100 outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
        </div>

        <button className="bg-blue-200">로그인</button>
      </form>
    </div>
  );
}

export default PageLogin;
