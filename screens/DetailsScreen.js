import { Text } from 'react-native'

const DetailsScreen = ({route}) => {
    const mealId = route.params.mealId;

    return (
        <Text> This is a meals details screen {mealId}</Text>
    )
}

export default DetailsScreen
