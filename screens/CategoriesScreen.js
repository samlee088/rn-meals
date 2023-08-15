import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';


function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {
    
        function pressHandler() {
            navigation.navigate('MealsOverview');
        }
    
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color} 
                pressMealCategory={pressHandler}
            />
        )
    }

    return <FlatList  
        data = { CATEGORIES } 
        keyExtractor={(item) => item.id}
        renderItem = {renderCategoryItem}
        numColumns={2}
        />
}

export default CategoriesScreen;
