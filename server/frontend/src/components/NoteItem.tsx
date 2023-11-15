import { FC } from "react";

interface Props {
  title?: string;
}

const NoteItem: FC<Props> = ({ title }) => {
  return (
    <div className="bg-white shadow-md rounded p-5">
      <p className="font-semibold mb-4 text-gray-700 text-lg">{title}</p>
      <div className="space-x-4">
        <button className="bg-blue-500 text-white p-2 rounded">View</button>
        <button className="bg-gray-700 text-white p-2 rounded">Edit</button>
        <button className="bg-red-500 text-white p-2 rounded">Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
