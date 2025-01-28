import { Suspense } from "react";
import getMeal from "@/libs/getMeal";
import LoadingMealsPage from "../loading-minus";
import classes from "./page.module.css";
import TextTransformator from "@/helpers/text_transformator";
import Image from "next/image";
import { notFound } from "next/navigation";

async function MealDetailsPage({ params }) {
  try {
    // Fetch the meal data
    const meal = await getMeal(params);
    const {
      title,
      creator,
      creator_email,
      description,
      summary,
      image,
      instructions,
    } = meal;
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
          <br />
          <a href={`tel:${88005353535}`} className={classes["creator-email"]}>
            {"vosemvosemsot"}
          </a>
        </p>
        <div className={classes["image-container"]}>
          <Image className={classes["image"]} src={image} alt={title} fill />
        </div>
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
          <p
            dangerouslySetInnerHTML={{
              __html: TextTransformator(instructions),
            }}
          ></p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading meal details:", error);
    notFound();
    // return <p>Failed to load meal details. Please try again later.</p>;
  }
}

export default function MealPage({ params }) {
  return (
    <Suspense fallback={<LoadingMealsPage />}>
      <MealDetailsPage params={params} />
    </Suspense>
  );
}
