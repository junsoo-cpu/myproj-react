import { Link } from 'react-router-dom';
import imgBackground from 'assets/images/test.png';

function ProfileSummary({ profile }) {
  return (
    <div>
      <div class="flex justify-center space-x-2 w-full bg-white overflow-hidden mx-auto">
        <div class="mb-5 card  min-w-sm border border-gray-100 bg-purple-100 transition-shadow shadow-xl hover:shadow-xl min-w-max">
          <div class="w-full card__media">
            <img src={imgBackground} className="h-48 w-96" alt="" />
          </div>
          <div class="card__media--aside "></div>
          <div class="flex items-center p-4">
            <div class="relative flex flex-col items-center w-full">
              <div class="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                {profile.photo && (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="rounded-full w-32"
                    rounded-full
                    w-32e
                  />
                )}
                <div class="absolute"></div>
              </div>
              <div class="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
                <span class="text-md whitespace-nowrap text-gray-800 font-semibold">
                  {profile.name}
                </span>
                <span class="text-md whitespace-nowrap text-gray-600">
                  생일 : {profile.birth}
                </span>
                <span class="text-md whitespace-nowrap text-gray-600">
                  나이 : {profile.age}세
                </span>
                <span class="text-md whitespace-nowrap text-gray-600">
                  키 : {profile.height}cm
                </span>
                <span class="text-md whitespace-nowrap text-gray-600">
                  취미 : {profile.hobby}
                </span>
                <div class="py-2 flex space-x-2">
                  <span class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-pruple-300 rounded max-w-max text-gray-100 bg-purple-500 hover:bg-purple-700 px-4 py-1 flex items-center hover:shadow-lg">
                    <span class="mr-2">
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 32 32"
                        class="fill-current text-red-100"
                      >
                        <path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"></path>
                      </svg>
                    </span>
                    귀멸의 칼날 <span class="ml-2"></span>
                  </span>
                  <button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-purple-300 rounded max-w-max border bg-transparent border-purple-700 text-purple-700 hover:border-purple-800 hover:border-purple-800 px-4 py-1 flex items-center hover:shadow-lg">
                    <Link
                      to={`/animation/${profile.id}/`}
                      className="font-semibold text-dark"
                    >
                      스토리
                    </Link>
                  </button>
                </div>
                <div class="flex justify-between py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="flex items-center justify-center">
      <div class="bg-blue-200 w-1/3 mt-10 rounded-lg">
        <div class="flex items-center justify-center pt-10 flex-col">
          {profile.photo && (
            <img
              src={profile.photo}
              alt={profile.name}
              className="rounded-full w-32"
              rounded-full
              w-32e
            />
          )}
          <h1 class="text-gray-800 font-semibold text-xl mt-5">
            {profile.name}
          </h1>
          <h1 class="text-gray-500 text-sm p-4 text-center">{profile.birth}</h1>
          <h1 class="text-gray-500 text-sm p-4 text-center">{profile.age}</h1>
          <h1 class="text-gray-500 text-sm p-4 text-center">
            {profile.height}
          </h1>
          <h1 class="text-gray-500 text-sm p-4 text-center">{profile.hobby}</h1>
        </div>
        <div class="flex justify-between p-4">
          <div>
            <h1 class="text-xs text-yellow-500">귀멸의 칼날</h1>
          </div>
          <div>
            <button class="text-xs text-green-500 border-2 py-1 px-2 border-green-500">
              <Link
                to={`/animation/${profile.id}/`}
                className="font-semibold text-dark"
              >
                스토리
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div> */
}

export default ProfileSummary;
