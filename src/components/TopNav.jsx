import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <div class="app">
      <ul className="flex gap-4 pb-3">
        <li>
          <MyLink to="/blog/">블로그</MyLink>
        </li>
        <li>
          <MyLink to="/news/">뉴스룸</MyLink>
        </li>
        <li>
          <MyLink to="accounts/login/">로그인</MyLink>
        </li>
        <li>
          <MyLink to="/accounts/profile/">프로필</MyLink>
        </li>
        {/* <li>
          <MyLink to="/reviews/">리뷰</MyLink>
        </li>
        <li>
          <MyLink to="/examples/components/">컴포넌트 예시</MyLink>
        </li> */}

        {/* <li>
          <MyLink to="examples/clock/">시계</MyLink>
        </li>
        <li>
          <MyLink to="examples/css-module/">CssModule</MyLink>
        </li>
        <li>
          <MyLink to="examples/cssInjs/">CssInJs</MyLink>
        </li>
        <li>
          <MyLink to="examples/contextapisample/">ContextApiSample</MyLink>
        </li>
        <li>
          <MyLink to="examples/contextapisample2/">ContextApiSample2</MyLink>
        </li> */}
      </ul>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <Link
      to={to}
      className="pb-1 text-gray-500 hover:text-red-500 hover:border-red-500 border-b-4"
    >
      {children}
    </Link>
  );
}

export default TopNav;
