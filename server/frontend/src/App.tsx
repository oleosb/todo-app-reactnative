import { useState, ChangeEventHandler } from "react";
import NoteItem from "./components/NoteItem";

const App = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-4 bg-white shadow-md rounded p-5">
        <h1 className="font-semibold text-2xl text-center">Note Application</h1>
        <div>
          <input
            className="w-full border-b-2 border-gray-700 outline-none"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={values.title}
            name="title"
          />
        </div>
        <div>
          <textarea
            className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="text-right">
          <button
            onClick={() => console.log(values)}
            className="bg-blue-500 text-white px-5 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Note Items */}
      <NoteItem title="Texto" />
      <NoteItem title="Texto" />
      <NoteItem title="Texto" />
      <NoteItem title="Texto" />
    </div>
  );
};

export default App;
