function BlogList({ blog, handleEdit, handleDelete }) {
  const { title, content } = blog;
  return (
    <div className="bg-yellow-100 border border-yellow-400 my-1 p-1">
      <div>
        <div>
          <span
            onClick={() => handleEdit()}
            className="hover:text-blue-400 cursor-pointer mr-1"
          >
            수정
          </span>
          <span
            onClick={() => handleDelete()}
            className="hover:text-red-400 cursor-pointer"
          >
            삭제
          </span>
        </div>
      </div>
      {title}
      {content}
    </div>
  );
}

export default BlogList;
