import { useNavigate } from 'react-router-dom';

function BlogList({ blog, handleEdit, handleDelete }) {
  const navigate = useNavigate();
  const { title } = blog;
  return (
    <div className="-m-2 text-center">
      <div className="p-2">
        <div className="items-center bg-yellow-200 leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
          <span
            onClick={() => navigate(`/blog/${blog.id}`)}
            className="cursor-pointer hover:text-gray-400 px-2"
          >
            {title}
          </span>
          <div className="justify-end">
            <span
              onClick={() => handleEdit()}
              className="text-xs hover:text-blue-400 cursor-pointer mr-1"
            >
              수정
            </span>
            <span
              onClick={() => handleDelete()}
              className="text-xs hover:text-red-400 cursor-pointer"
            >
              삭제
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
