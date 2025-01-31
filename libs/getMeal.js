import sql from "better-sqlite3";

const db = sql("meals.db");

export default async function getMeal({ slug }) {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const meal = db.prepare(`SELECT * FROM meals WHERE slug = ?`).get(slug);
    // console.log(meal);
    return meal;
  } catch (error) {
    throw new Error(
      "This meal is not found or unavailable at the moment. Please try again later."
    );
  }
}
//sql injection