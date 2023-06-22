import { useState, useEffect, useMemo } from 'react'
import { StyleSheet, View, FlatList, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { generateRandomBetween } from '../helpers/generateRandomNumber'
import Colors from '../constants/color'

// Components
import Title from './Title'
import NumberContainer from './NumberContainer'
import BoxWrapper from './BoxWrapper'
import InstructionText from './InstructionText'
import ButtonsView from './ButtonsView'
import GuessItem from './GuessItem'

let minBoundary = 1
let maxBoundary = 100

const GameScreen = ({ userNumber, gameOver }) => {
  const initialGuess = useMemo(() => generateRandomBetween(minBoundary, maxBoundary, userNumber), [])
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOver(guessRounds.length)
      minBoundary = 1
      maxBoundary = 100
    }
  }, [currentGuess, userNumber, gameOver])

  const nextGuessHandler = (direction) => {
    // direction => 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }])
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRandomNumber)
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds])
  }
  return (
    <>
      <View style={styles.screen}>
        <Title style={styles.title}>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <BoxWrapper>
          <InstructionText style={styles.instructionText}>Greater or Lower</InstructionText>
          <ButtonsView
            btn1Text={<Ionicons name="md-remove" size={24} color="white" />}
            btn2Text={<Ionicons name="md-add" size={24} color="white" />}
            onPressBtn1={() => nextGuessHandler('lower')}
            onPressBtn2={() => nextGuessHandler('greater')}
          />
        </BoxWrapper>

        <View style={styles.guessContainer}>
          <FlatList
            data={guessRounds}
            renderItem={({ item, index }) => <GuessItem guess={item} roundNumber={guessRounds.length - index} />}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </>
  )
}
export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  guessContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginTop: 50,
  },
  instructionText: {
    marginBottom: 12,
  },
})
