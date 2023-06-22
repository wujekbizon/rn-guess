import { StyleSheet, View } from 'react-native'
import CustomButton from './CustomButton'

const ButtonsView = ({ onPressBtn1, onPressBtn2, btn1Text, btn2Text }) => {
  return (
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
        <CustomButton handleOnPress={onPressBtn1}>{btn1Text}</CustomButton>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton handleOnPress={onPressBtn2}>{btn2Text}</CustomButton>
      </View>
    </View>
  )
}
export default ButtonsView

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
