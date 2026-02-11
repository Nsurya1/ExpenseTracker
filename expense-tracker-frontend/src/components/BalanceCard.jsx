export default function BalanceCard({ expenses }) {
  const income = expenses.reduce((sum, e) => sum + (e.amount > 0 ? e.amount : 0), 0);
  const expense = expenses.reduce((sum, e) => sum + (e.amount < 0 ? Math.abs(e.amount) : 0), 0);
  const total = income - expense;

  return (
    <div className="bg-emerald-500 text-white p-6 rounded-2xl shadow-lg mt-4">
      <p className="text-sm">Total Balance</p>
      <h2 className="text-3xl font-bold mt-2">₹ {total}</h2>
      <div className="flex justify-between mt-4 text-sm">
        <span>Income ₹{income}</span>
        <span>Expense ₹{expense}</span>
      </div>
    </div>
  );
}
