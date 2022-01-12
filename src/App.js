import TopNav from 'components/TopNav';
import Login from 'pages/accounts/Login';
import Profile from 'pages/accounts/Profile';
import ReviewList from 'pages/reviews/ReviewList';
import { Navigate, Route, Routes } from 'react-router-dom';
import Components from 'pages/examples/Components';
import ReviewForm from 'pages/reviews/ReviewForm';

import './App.css';
import PageBlogPostList from 'pages/blog/PageBlogPostList';
import BlogForm from 'pages/blog/BlogForm';
import PageDetail from 'pages/blog/PageDetail';
import Clock from 'pages/examples/CLock';
import CssModule from 'pages/examples/CssModule';
import CssInJs from 'pages/examples/CssInJs';
import ContextApisample from 'pages/examples/ContextApiSample';
import ContextApiSample2 from 'pages/examples/ContextApiSample2';
import PageNewsIndex from 'pages/news/PageNewsIndex';
import PageNewsArticleDetail from 'pages/news/PageNewsArticleDetail';

function App() {
  return (
    <div className="app">
      <TopNav />

      <Routes>
        <Route path="/" element={<Navigate to="/reviews/" />} />
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />

        <Route path="/reviews/" element={<ReviewList />} />

        <Route path="/reviews/new/" element={<ReviewForm />} />
        <Route path="/blog/" element={<PageBlogPostList />} />
        <Route path="/blog/new/" element={<BlogForm />} />
        <Route path="/blog/:blogId/edit/" element={<BlogForm />} />
        <Route path="/blog/:postId/" element={<PageDetail />} />
        <Route path="/news/" element={<PageNewsIndex />} />
        <Route path="/news/:articleId" element={<PageNewsArticleDetail />} />

        <Route path="/examples/components/" element={<Components />} />
        <Route path="/examples/clock/" element={<Clock />} />
        <Route path="/examples/css-module" element={<CssModule />} />
        <Route path="/examples/cssInjs" element={<CssInJs />} />
        <Route
          path="/examples/contextapisample"
          element={<ContextApisample />}
        />
        <Route
          path="/examples/contextapisample2"
          element={<ContextApiSample2 />}
        />
      </Routes>
    </div>
  );
}

export default App;
