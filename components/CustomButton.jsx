import { View, StyleSheet, Pressable, Text } from 'react-native'
import Colors from '../constants/color'

const CustomButton = ({ children, handleOnPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
        android_ripple={{ color: Colors.primary600, borderless: true }}
        onPress={handleOnPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}
export default CustomButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary400,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.white,
  },
  pressed: {
    opacity: 0.75,
  },
})
