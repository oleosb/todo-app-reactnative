import { useState, ChangeEventHandler, useEffect } from "react";
import NoteItem from "./components/NoteItem";
import axios from "axios";

const App = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const [notes, setNotes] = useState<
    { id: string; title: string; description?: string }[]
  >([]);
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const [selectNoteId, setSelectedNoteId] = useState("");

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    const fetchNotes = async () => {
      // call the api and fetch notes
      const { data } = await axios("http://localhost:8000/note");
      setNotes(data.notes);
    };

    fetchNotes();
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (selectNoteId) {
            //then we want to update
            const { data } = await axios.patch(
              "http://localhost:8000/note/" + selectNoteId,
              {
                title: values.title,
                description: values.description,
              }
            );
            console.log(data.note);
            return;
          }

          const { data } = await axios.post(
            "http://localhost:8000/note/create",
            {
              title: values.title,
              description: values.description,
            }
          );

          setNotes([data.note, ...notes]);
          setValues({ title: "", description: "" });
        }}
        className="space-y-4 bg-white shadow-md rounded p-5"
      >
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
          <button className="bg-blue-500 text-white px-5 py-2 rounded">
            Submit
          </button>
        </div>
      </form>

      {/* Note Items */}

      {notes.map((note) => {
        return (
          <NoteItem
            onEditClick={() => {
              setSelectedNoteId(note.id);
              setValues({
                title: note.title,
                description: note.description || "",
              });
              console.log(selectNoteId)
            }}
            key={note.id}
            title={note.title}
          />
        );
      })}
    </div>
  );
};

export default App;
