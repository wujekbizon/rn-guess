import { useState, useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import image from './assets/images/car.png'
import Colors from './constants/color'
// Components
import { StartGameScreen, GameScreen, GameOver } from './components'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [isGameOver, setIsGameOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    // start the game
    setIsGameOver(false)
  }
  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds)
    setIsGameOver(true)
  }

  const startNewGameHandler = () => {
    setUserNumber(null)
    setGuessRounds(0)
  }

  return (
    <LinearGradient colors={[Colors.gradient1, Colors.gradient2]} style={styles.rootScreen}>
      <ImageBackground style={styles.rootScreen} source={image} resizeMode="cover" imageStyle={styles.backgroundImage}>
        <StatusBar style="light" />
        <SafeAreaView style={styles.rootScreen} onLayout={onLayoutRootView}>
          {!userNumber && <StartGameScreen onGameStart={pickedNumberHandler} />}
          {userNumber && !isGameOver && <GameScreen userNumber={userNumber} gameOver={gameOverHandler} />}
          {isGameOver && userNumber && (
            <GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
})
