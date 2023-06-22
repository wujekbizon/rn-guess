import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../constants/color'

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}
export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: deviceWidth < 380 ? 12 : 24,
    marginTop: 24,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 45 : 55,
    fontFamily: 'open-sans-bold',
  },
})
