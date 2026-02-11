import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./components/AddExpenses";

function App() {
  const isLoggedIn = !!localStorage.getItem("token"); // simple auth check

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
      <Route path="/add" element={isLoggedIn ? <AddExpense /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;
