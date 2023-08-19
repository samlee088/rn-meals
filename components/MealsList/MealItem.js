import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import MealsDetails from "../MealsDetails";

const MealItem = ({ affordability, complexity, duration, id, title, imageUrl }) => {
  const navigation = useNavigation();

 

  function selectMealItemHandler() {
    navigation.navigate('DetailsScreen', {
      mealId: id,
    });
  }

  return (
    <View style = {styles.mealItem}>
      <Pressable android_ripple={{color: '#ccc'}} style = { ({pressed}) => (pressed ? styles.buttonPressed : null) } onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style = {styles.image} />
              <Text  style = {styles.title}>
                  {title}
              </Text>
          </View>
          <MealsDetails duration={duration} affordability={affordability} complexity={complexity}/>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    shadow: 'black',
    shadowOpacity: 0.35,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: .5,
  },
})
