export default function ExpenseTable({ expenses, categories }) {
  const getCategoryName = (id) =>
    categories.find(c => c.categoryId === id)?.categoryName || "Unknown";

  return (
    <div className="mt-6 bg-white p-4 rounded shadow overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(e => (
            <tr key={e.expenseId} className="border-b">
              <td className="px-4 py-2">{e.title}</td>
              <td className={`px-4 py-2 ${e.amount < 0 ? "text-red-500" : "text-green-500"}`}>
                ₹ {e.amount}
              </td>
              <td className="px-4 py-2">{getCategoryName(e.categoryId)}</td>
              <td className="px-4 py-2">{new Date(e.expenseDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
