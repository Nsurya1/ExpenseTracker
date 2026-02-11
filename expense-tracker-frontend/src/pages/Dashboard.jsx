import { useEffect, useState } from "react";
import axios from "axios";
import BalanceCard from "../components/BalanceCard";
import AddButton from "../components/AddButton";
import ExpenseTable from "../components/ExpenseTable";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Fetch categories
    axios.get("/api/categories").then(res => setCategories(res.data));
    // Fetch expenses
    axios.get("/api/expenses").then(res => setExpenses(res.data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <BalanceCard expenses={expenses} />

<CategoryFilter
  categories={categories}
  selected={selectedCategory}
  onChange={setSelectedCategory}
/>

<ExpenseTable
  expenses={expenses.filter(e => !selectedCategory || e.categoryId === selectedCategory)}
  categories={categories}
/>

      <AddButton />
    </div>
  );
}
