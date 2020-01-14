import {
  createSwitchNavigator,
  createAppContainer
}from 'react-navigation'

// Screens
import Home from './pages/Home'
import Contato from './pages/Contato'

const Navigation = createSwitchNavigator({
  Home: {
    screen: Home,
  },
  Contato: {
    screen: Contato
  },
})

export default createAppContainer(Navigation)