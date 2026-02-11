import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddExpense() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    // Fetch categories
    axios.get("/api/categories").then(res => setCategories(res.data));
  }, []);

  const handleAdd = async () => {
    try {
      await axios.post("/api/expenses", { title, amount: parseFloat(amount), categoryId });
      alert("Expense added!");
      nav("/dashboard");
    } catch (err) {
      alert("Failed to add expense");
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Expense</h1>
        <input
          type="text"
          placeholder="Title"
          className="w-full mb-4 p-2 border rounded"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="w-full mb-4 p-2 border rounded"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <select
          className="w-full mb-4 p-2 border rounded"
          value={categoryId}
          onChange={e => setCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map(c => (
            <option key={c.categoryId} value={c.categoryId}>
              {c.categoryName}
            </option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          className="w-full bg-emerald-500 text-white py-2 rounded hover:bg-emerald-600"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}
