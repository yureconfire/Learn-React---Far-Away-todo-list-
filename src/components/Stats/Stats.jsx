function Stats({ items }) {
  const itemsTotal = items.length;
  const itemsPackedNum = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPackedNum / itemsTotal) * 100);

  return (
    <footer className="stats ">
      <em>
        💼 You have {itemsTotal} items on your list, and you already packed{" "}
        {itemsPackedNum} ({percentage ? percentage : 0}%)
      </em>
    </footer>
  );
}

export default Stats;

/* eslint react/prop-types: 0 */
