import { StyleSheet, View, Dimensions } from 'react-native'
import Colors from '../constants/color'

const BoxWrapper = ({ children }) => {
  return <View style={styles.boxContainer}>{children}</View>
}
export default BoxWrapper

const deviceWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary500,
    borderRadius: 10,
    padding: 14,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})
