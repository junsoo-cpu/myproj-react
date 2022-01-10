function BlogList({ blog }) {
  const { title, content } = blog;
  return (
    <div className="bg-yellow-100 border border-yellow-400 my-1 p-1">
      {title}
      {content}
    </div>
  );
}

export default BlogList;
