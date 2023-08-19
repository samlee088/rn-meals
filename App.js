import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import DetailsScreen from './screens/DetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
// import FavoritesContextProvider from './store/context/favoritesL-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions = {{
      headerStyle: { backgroundColor: '#cccccc' },
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1',
   }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
          title: 'All Categories',
          drawerIcon: ( {color, size} ) =>  ( <Ionicons name='list' color={color} size={size} />),
      }}/>
      <Drawer.Screen name='Favorites' component={FavoritesScreen} options={{
        drawerIcon: ({color, size }) => (
          <Ionicons name='star' color={color} size={size} />
        ),
      }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style = 'dark'/>
     {/*  <FavoritesContextProvider> */}
     <Provider store = {store} >
        <NavigationContainer>
          {/* Use stack navigator to set default screen options. The specific screen options will override generic settings */}
          <Stack.Navigator screenOptions = {{
            headerStyle: { backgroundColor: '#cccccc' },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
            <Stack.Screen 
              name='MealCategories' 
              component={DrawerNavigator} 
              options = { {
                headerShown: false,
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
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ title: 'About the Meal'}} />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </FavoritesContextProvider> */}
      </Provider>
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
