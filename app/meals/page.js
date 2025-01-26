import { Suspense } from "react";
import MealsGrid from "@/components/MealsGrid";
import getMeals from "@/libs/getMeals";
import LoadingMealsPage from "./loading-minus";

async function MealsPage() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export default () => {
  return (
    <Suspense fallback={<LoadingMealsPage />}>
      <MealsPage />
    </Suspense>
  );
};
