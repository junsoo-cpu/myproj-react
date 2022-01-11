function BlogForm({ fieldValues, handleFieldChange, handleSubmit, loading }) {
  const handleClickedSubmitButton = () => {
    if (handleSubmit) {
      handleSubmit();
    } else {
      console.warn('handleSubmit 속성값을 지정해주세요.');
    }
  };

  return (
    <div>
      {loading && 'Loading ...'}
      <div className="pb-5">
        <input
          name="title"
          value={fieldValues.title}
          onChange={handleFieldChange}
          className="bg-gray-100 border border-gray-400 w-96"
          disabled={loading}
        />
      </div>
      <div className="pb-5">
        <textarea
          name="content"
          value={fieldValues.content}
          onChange={handleFieldChange}
          className="bg-gray-100 border border-gray-400 w-96 h-80"
          disabled={loading}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-100 cursor-pointer"
          onClick={() => handleClickedSubmitButton()}
          disabled={loading}
        >
          {loading && '로딩 아이콘'}저장하기
        </button>
      </div>
    </div>
  );
}

export default BlogForm;
