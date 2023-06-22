import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/color'

const Title = ({ children, style }) => {
  return (
    <View style={[styles.titleContainer, style]}>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}
export default Title

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 12,
    borderColor: Colors.white,
    borderWidth: 2,
    maxWidth: '80%',
  },
  title: {
    color: Colors.white,
    fontSize: 22,
    fontFamily: 'open-sans-bold',
  },
})
