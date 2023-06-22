import { useState } from 'react'
import { StyleSheet, View, TextInput, Alert, useWindowDimensions } from 'react-native'
import Colors from '../constants/color'

// Components
import Title from './Title'
import CustomButton from './CustomButton'
import BoxWrapper from './BoxWrapper'
import InstructionText from './InstructionText'
import ButtonsView from './ButtonsView'

const StartGameScreen = ({ onGameStart }) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const { width, height } = useWindowDimensions()

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText)
  }

  const confirmInputHandler = () => {
    // add validation
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 || enteredNumber.match(/[\s-.,]/g)) {
      Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99', [
        { text: 'Okay', style: 'cancel', onPress: resetInputHandler },
      ])
      return
    }

    onGameStart(chosenNumber)
    setEnteredNumber('')
  }

  const resetInputHandler = () => {
    setEnteredNumber('')
  }

  const marginTop = height < 380 ? 30 : 100
  return (
    <View style={[styles.container, { marginTop }]}>
      <Title>Guess My Number</Title>
      <BoxWrapper>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.input}
          value={enteredNumber}
          onChangeText={numberInputHandler}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <ButtonsView
          onPressBtn1={resetInputHandler}
          onPressBtn2={confirmInputHandler}
          btn1Text="Reset"
          btn2Text="Confirm"
        />
      </BoxWrapper>
    </View>
  )
}
export default StartGameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  input: {
    height: 50,
    width: 50,
    textAlign: 'center',
    color: Colors.accent500,
    borderWidth: 1,
    borderBottomColor: Colors.accent500,
    fontSize: 32,
    fontWeight: '700',
    marginVertical: 8,
  },
})
