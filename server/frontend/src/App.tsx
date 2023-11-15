const App = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-5 space-y-4">
      <h1 className="font-semibold text-2xl text-center">Note Application</h1>
      <div>
        <input
          className="w-full border-b-2 border-gray-700 outline-none"
          type="text"
          placeholder="Title"
        />
      </div>
      <div>
        <textarea
          className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
          placeholder="Description"
        ></textarea>
      </div>
      <div className="text-center">
        <button className="bg-blue-500 text-white px-5 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
