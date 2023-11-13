const App = () => {
  return (
    <div className="w-[500px] mx-auto bg-gray-200">
      <h1 className="font-semibold text-2xl text-blue-400">Note Application</h1>
      <div>
        <input className="" type="text" placeholder="Title" />
      </div>
      <div>
        <textarea className="" placeholder="Description"></textarea>
      </div>
    </div>
  );
};

export default App;
