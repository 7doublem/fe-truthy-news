import sortby from "../../sortingIcons/sortby.svg";
import orders from "../../sortingIcons/orders.svg";
import { useState } from "react";

function SortArticles({ sortBy, setSortBy, order, setOrder }) {
  const [listOpen, setListOpen] = useState(false);

  const toggleOrder = () => {
    setOrder((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  const options = [
    { value: "created_at", label: "Date" },
    { value: "comment_count", label: "Comments" },
    { value: "votes", label: "votes" },
  ];

  return (
    <div>
      <button onClick={() => setListOpen(!listOpen)}>
        <img
          src={sortby}
          alt="Sort By Date, Comment Count or Votes"
          width={24}
          height={24}
        />
      </button>

      {listOpen && (
        <div>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setSortBy(option.value);
                setListOpen(false);
              }}
            >
              <button>{option.label}</button>
            </div>
          ))}
        </div>
      )}
      <button onClick={toggleOrder}>
        <img
          src={orders}
          alt="Order Ascending or Descending"
          width={24}
          height={24}
        />
      </button>
      <p>Sorting by: {sortBy}</p>
      <p>Order: {order}</p>
    </div>
  );
}

export default SortArticles;
