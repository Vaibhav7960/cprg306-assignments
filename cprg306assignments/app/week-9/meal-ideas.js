"use client";
import { useState, useEffect } from "react";



// Function to fetch meal ideas from the API
const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    if (!response.ok) {
        throw new Error("Failed to fetch meal ideas");
    }
    const data = await response.json();
    return data.meals || [];
};

const MealIdeas = ({ ingredient, onSelect = () => {} }) => {
    const [meals, setMeals] = useState([]);

    // Function to load meal ideas and update state
    const loadMealIdeas = async () => {
        try {
            const fetchedMeals = await fetchMealIdeas(ingredient);
            setMeals(fetchedMeals);
        } catch (error) {
            console.error("Error loading meal ideas:", error);
        }
    };

    // Use useEffect to load meal ideas when the ingredient prop changes
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h1>Meal Ideas</h1>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} onClick={() => onSelect && onSelect(String(meal.strMeal || "").trim())}>
                        <h2>{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "150px", height: "150px" }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;