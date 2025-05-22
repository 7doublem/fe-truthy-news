import sortby from "../../sortingIcons/sortby.svg";
import orders from "../../sortingIcons/orders.svg";
import { useState } from "react";

function SortArticles({ sortBy, order, setSearchParams }) {
  const [listOpen, setListOpen] = useState(false);

  const toggleOrder = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    setSearchParams({ sort_by: sortBy, order: newOrder });
  };

  const handleSortUpdate = (newSortBy) => {
    setSearchParams({ sort_by: newSortBy, order });
    setListOpen(false);
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
                handleSortUpdate(option.value);
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
