import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style = 'dark'/>
      <NavigationContainer>
        {/* Use stack navigator to set default screen options. The specific screen options will override generic settings */}
        <Stack.Navigator screenOptions = {{
           headerStyle: { backgroundColor: '#cccccc' },
           headerTintColor: 'white',
           contentStyle: {backgroundColor: '#3f2f25'},
        }}>
          <Stack.Screen 
            name='MealCategories' 
            component={CategoriesScreen} 
            options = { {
              title: 'All Categories',
            } } 
          />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} 
          /* one way to dynamically set up dynamic route information */
          // options = { ({ route, navigation }) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   };
          // } }
          />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
