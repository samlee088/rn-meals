import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons'
const IconButton = ({ color, icon, onPressButton }) => {
  return (
    <Pressable onPress={onPressButton} style = {({pressed}) => pressed ? styles.pressed : null}>
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: .5,
    },
})