// import { Link } from 'react-router-dom';

// function TopNav() {
//   return (
//     <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
//       <div class="flex items-center flex-shrink-0 text-white mr-6">
//         <svg
//           class="fill-current h-8 w-8 mr-2"
//           width="54"
//           height="54"
//           viewBox="0 0 54 54"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
//         </svg>
//         <span class="font-semibold text-xl tracking-tight">Top Navigation</span>
//       </div>
//       <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//         <div class="text-sm lg:flex-grow">
//           <ul className="flex gap-4 pb-3">
//             <li>
//               <MyLink to="/animation/">귀멸의 칼날</MyLink>
//             </li>
//             <li>
//               <MyLink to="/blog/">블로그</MyLink>
//             </li>
//             <li>
//               <MyLink to="/news/">뉴스룸</MyLink>
//             </li>
//             <li>
//               <MyLink to="accounts/login/">로그인</MyLink>
//             </li>
//             <li>
//               <MyLink to="/accounts/profile/">프로필</MyLink>
//             </li>
//             <li>
//           <MyLink to="/reviews/">리뷰</MyLink>
//         </li>
//         <li>
//           <MyLink to="/examples/components/">컴포넌트 예시</MyLink>
//         </li>

//             <li>
//           <MyLink to="examples/clock/">시계</MyLink>
//         </li>
//         <li>
//           <MyLink to="examples/css-module/">CssModule</MyLink>
//         </li>
//         <li>
//           <MyLink to="examples/cssInjs/">CssInJs</MyLink>
//         </li>
//         <li>
//           <MyLink to="examples/contextapisample/">ContextApiSample</MyLink>
//         </li>
//         <li>
//           <MyLink to="examples/contextapisample2/">ContextApiSample2</MyLink>
//         </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { NavLink } from 'react-router-dom';

function TopNav() {
  return (
    <div className="my-3">
      <div className="flex place-content-between gap-4">
        <NavLink to="/" className="px-4 py-3 font-semibold">
          나만의 블로그
        </NavLink>
        <div className="flex">
          <MyLink to="/animation/">귀멸의 칼날</MyLink>
          <MyLink to="/blog/">블로그</MyLink>
          <MyLink to="/accounts/login/">로그인</MyLink>
          <MyLink to="/accounts/profile/">프로필</MyLink>
          <MyLink to="/news/">뉴스룸</MyLink>
        </div>
      </div>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        baseClassName + ' ' + (isActive ? 'border-b-4 border-red-400' : '')
      }
    >
      {children}
    </NavLink>
  );
}

const baseClassName =
  'px-4 pt-3 pb-2 font-semibold hover:bg-red-200 hover:text-red-500 hover:text-white';

export default TopNav;
