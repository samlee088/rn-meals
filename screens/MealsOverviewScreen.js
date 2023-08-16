import { FlatList, StyleSheet,Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  /* an alternative way to get to routes */
  /*   const route = useRoute(); */

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter( (mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem title = {itemData.item.title}/>
  }

  return (
    <View style = {styles.container}>
        <FlatList 
          data = {displayedMeals} 
          keyExtractor = { (item) => item.id }
          renderItem = { renderMealItem }
        />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})