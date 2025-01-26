import sql from "better-sqlite3";

const db = sql("meals.db");

export default async function getMeals() {
  try{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const meals = db.prepare("SELECT * FROM meals").all();
    return meals;
  } catch (error) {
    throw new Error("Meals are not available at the moment. Please try again later.");
  }
}