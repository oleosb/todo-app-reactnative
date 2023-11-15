import { FC } from "react";
import AppButton from "./AppButton";

interface Props {
  title?: string;
}

const NoteItem: FC<Props> = ({ title }) => {
  return (
    <div className="bg-white shadow-md rounded p-5">
      <p className="font-semibold mb-4 text-gray-700 text-lg">{title}</p>
      <div className="space-x-4">
        <AppButton title="View" type="regular" />
        <AppButton title="Edit" type="normal" />
        <AppButton title="Delete" type="danger" />
      </div>
    </div>
  );
};

export default NoteItem;
