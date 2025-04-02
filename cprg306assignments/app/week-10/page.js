import React, { useEffect, useState } from "react";
import { getItems, addItem } from "../shopping-list-service";
import { useUserAuth } from "../week-10/_utils/auth-context";

const ShoppingList = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);

  // Load shopping list items
  const loadItems = async () => {
    if (user?.uid) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  // Add an item to the shopping list
  const handleAddItem = async (newItem) => {
    if (user?.uid) {
      const itemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { ...newItem, id: itemId }]);
    }
  };

  // Use useEffect to load items when the component is mounted
  useEffect(() => {
    loadItems();
  }, [user?.uid]); // Dependency array includes user.uid

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* Add functionality to handle adding items */}
    </div>
  );
};

export default ShoppingList;