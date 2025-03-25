"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    setQuantity(quantity + 1 < 20 ? quantity + 1 : 20);
  };

  const decrement = () => {
    setQuantity(quantity - 1 > 1 ? quantity - 1 : 1);
  };

  const reset = () => {
    setQuantity(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-900">
      <div className="bg-orange-300 shadow-lg p-8 text-center border-custom">
        <h1 className="text-3xl font-extrabold text-center text-black mb-2 ">
          COUNTER PROGRAM FOR SHOPPING LIST
        </h1>
        <h1 className="text-2xl font-bold text-red-400 mb-4">
          Quantity: {quantity}
        </h1>

        <button
          className="font-large bg-gray-700 hover:bg-red-700 text-white font-bold p-2 px-4 rounded mr-2"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="font-large bg-yellow-800 hover:bg-cyan-700 text-white font-bold p-2 px-4 mt-12rounded"
          onClick={decrement}
        >
          Decrement
        </button>

        <button
          className="font-large bg-gray-700 hover:bg-green-700 text-white font-bold ml-2 px-4 p-2 rounded mr-2"
          onClick={reset}
        >
          Reset
        </button>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded mb-4 text-black"
            placeholder="Enter item name"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded mb-4"
          >
            <option className="text-black" value="Produce">Produce</option>
            <option className="text-black" value="Dairy">Dairy</option>
            <option className="text-black" value="Bakery">Bakery</option>
            <option className="text-black" value="Meat">Meat</option>
            <option className="text-black" value="Frozen Foods">Frozen Foods</option>
            <option className="text-black" value="Canned Goods">Canned Goods</option>
            <option className="text-black" value="Dry Goods">Dry Goods</option>
            <option className="text-black" value="Beverages">Beverages</option>
            <option className="text-black" value="Snacks">Snacks</option>
            <option className="text-black" value="Household">Household</option>
            <option className="text-black" value="Other">Other</option>
          </select>
          <button
            type="submit"
            className="font-large bg-blue-700 hover:bg-blue-900 text-white font-bold p-2 px-4 rounded"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}