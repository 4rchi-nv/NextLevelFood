import { Suspense } from "react";
import MealsGrid from "@/components/MealsGrid";
import classes from "./page.module.css";
import Link from "next/link";
import getMeals from "@/libs/getMeals";

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Tasty, Delicious very Vkusnye meals created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself at home. It is so
          easy to use!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite food</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
