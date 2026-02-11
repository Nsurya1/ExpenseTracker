export default function CategoryFilter({ categories, selected, onChange }) {
  return (
    <select
      className="p-2 border rounded mb-4"
      value={selected}
      onChange={e => onChange(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map(c => (
        <option key={c.categoryId} value={c.categoryId}>
          {c.categoryName}
        </option>
      ))}
    </select>
  );
}
