import { Suspense } from "react";
import getMeal from "@/libs/getMeal";
import LoadingMealsPage from "../loading-minus";
import classes from "./page.module.css";
import TextTransformator from "@/helpers/text_transformator";

async function MealDetailsPage({ params }) {
  try {
    // Fetch the meal data
    const {
      title,
      creator,
      creator_email,
      description,
      summary,
      instructions,
    } = await getMeal(params);
    // Render the meal details dynamically
    return (
      <div className={classes["meal-container"]}>
        <h1 className={classes["meal-title"]}>{title}</h1>
        <p className={classes["meal-creator"]}>
          Created by <span className={classes["creator-name"]}>{creator}</span>{" "}
          -{" "}
          <a
            href={`mailto:${creator_email}`}
            className={classes["creator-email"]}
          >
            {creator_email}
          </a>
        </p>
        <p className={classes["meal-description"]}>{description}</p>
        <div className={classes["meal-summary"]}>
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
        <div
          /**style={{whiteSpace: 'pre'}}*/ // 111111111111111111111111111111111111111111111111111111111
          className={classes["meal-instructions"]}
        >
          <h3>Instructions:</h3>
          {/* <p> 2222222222222222222222222222222222222222222222222222
            <pre>{instructions}</pre>
          </p> */}
          {/** 33333333333333333333333333333333333 */}
          {TextTransformator(instructions)}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading meal details:", error);
    return <p>Failed to load meal details. Please try again later.</p>;
  }
}

export default function MealPage({ params }) {
  return (
    <Suspense fallback={<LoadingMealsPage />}>
      <MealDetailsPage params={params} />
    </Suspense>
  );
}
