"use server";  // Ensure this runs only on the server

import fs from "fs";
import sql from "better-sqlite3";
import xss from "xss";
import { redirect } from "next/navigation";

const db = sql("meals.db");
export default async function handleMealSubmit(formData) {
  const arrOfKeys = ["title", "name", "image", "summary", "instructions", "email"];
  let meal = {};

  for (const key of arrOfKeys) {
    if(key === 'name'){
        meal['creator'] = formData.get(key);
        continue
    }
    meal[key] = formData.get(key);
  }

  meal.slug = (meal.title + "_" + meal.creator).toLowerCase().replace(/ /g, "-");

  try {
    // Handle image file separately
    if (meal.image && meal.image.name) {
      const fileExtension = meal.image.name.split(".").pop();
      const fileName = `${meal.slug}.${fileExtension}`;
      const filePath = `public/images/${fileName}`;
      
      // Save the image file to the server
      const stream = fs.createWriteStream(filePath);
      stream.write(Buffer.from(await meal.image.arrayBuffer()));

      meal.image = `/images/${fileName}`;
    } else {
      throw new Error("Image file is missing or invalid.");
    }

    meal.instructions = xss(meal.instructions);

    const stmt = db.prepare(`
      INSERT INTO meals VALUES (
        null,
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @email
      )
    `);

    const info = stmt.run(meal);
    console.log(info);
    // redirect("/meals");
  } catch (error) {
    console.error(error);
    throw new Error("Meal submission failed.");
  }
}
