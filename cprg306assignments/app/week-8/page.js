"use client";

import { useState } from "react";
import ItemList from "./Item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.trim();
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main>
      <h1 className="font-extrabold text-4xl p-3 pl-5 text-yellow-300 ">
        Shopping List
      </h1>
      <header>
        <ItemList onItemSelect={handleItemSelect} />
      </header>
      <section>
        <MealIdeas selectedIngredient={selectedItemName} />
      </section>
    </main>
  );
}
