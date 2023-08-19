import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation, }) => {
  /* an alternative way to get to routes */
  /*   const route = useRoute(); */

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter( (mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect( () => {
    const categoryTitle = CATEGORIES.find( (category) => category.id === catId ).title;

    navigation.setOptions({
      title: categoryTitle
    });

  }, [catId, navigation])

  return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen

