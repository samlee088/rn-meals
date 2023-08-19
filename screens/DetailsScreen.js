import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealsDetails from '../components/MealsDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useContext, useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
// import { FavoritesContext } from '../store/context/favorites-context';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

const DetailsScreen = ({route, navigation}) => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector( (state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find( (meal) => meal.id === mealId);

    // const mealsIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealsIsFavorite = favoriteMealsIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealsIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch( removeFavorite({ id: mealId }) );
        } else {
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch( addFavorite({ id: mealId }) );
        }
    };

    useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPressButton={changeFavoriteStatusHandler} icon={mealsIsFavorite ? 'star' : 'star-outline'} color='white'/>
            }
        });
    }, [navigation, changeFavoriteStatusHandler] )

    return (
        <ScrollView style={styles.root}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}/>
            <Text style={styles.title}>
                {selectedMeal.title}
            </Text>
           <MealsDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    root: {
        marginBottom: 32,
    },
 
})
