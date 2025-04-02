import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve all items for a specific user
export async function getItems(userId) {
    const items = [];
    try {
        const itemsCollection = collection(db, `users/${userId}/items`);
        const itemsQuery = query(itemsCollection);
        const querySnapshot = await getDocs(itemsQuery);

        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });
    } catch (error) {
        console.error("Error fetching items: ", error);
    }
    return items;
}

// Function to add a new item to a specific user's list
export async function addItem(userId, item) {
    try {
        const itemsCollection = collection(db, `users/${userId}/items`);
        const docRef = await addDoc(itemsCollection, item);
        return docRef.id;
    } catch (error) {
        console.error("Error adding item: ", error);
        throw error;
    }
}