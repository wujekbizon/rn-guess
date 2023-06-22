import { View, Image, StyleSheet, Text, Dimensions } from 'react-native'
import Title from './Title'
import CustomButton from './CustomButton'
import Colors from '../constants/color'

const GameOver = ({ userNumber, roundsNumber, onStartNewGame }) => {
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/game.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number
        <Text style={styles.highlight}> {userNumber}.</Text>
      </Text>
      <CustomButton handleOnPress={onStartNewGame}>Start New Game</CustomButton>
    </View>
  )
}
export default GameOver

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: deviceWidth < 380 ? 200 : 300,
    height: deviceWidth < 380 ? 200 : 300,
    borderRadius: deviceWidth < 380 ? 100 : 200,
    borderWidth: 4,
    borderColor: Colors.black,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary400,
  },
})
