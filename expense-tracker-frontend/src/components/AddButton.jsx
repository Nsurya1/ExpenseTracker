import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AddButton() {
  const nav = useNavigate();

  return (
    <button
      onClick={() => nav("/add")}
      className="fixed bottom-10 right-6 bg-emerald-500 p-4 rounded-full shadow-xl text-white"
    >
      <Plus />
    </button>
  );
}
