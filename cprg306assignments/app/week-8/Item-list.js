"use client";
import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList({ onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <main className="p-4">
      <div className="mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 mr-2 ${
            sortBy === "name" ? "bg-blue-200" : "bg-white"
          } text-black border border-gray-300 rounded`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 ${
            sortBy === "category" ? "bg-blue-200" : "bg-white"
          } text-black border border-gray-300 rounded`}
        >
          Sort by Category
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-300 rounded"
            onClick={() => onItemSelect(item)} // Trigger onItemSelect with the item
          >
            <Item
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
