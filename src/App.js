import React from 'react'; 
import MainPage from './containers/MainPage';
import { StateProvider } from './store'

const App = () => {
  return(
    <StateProvider>
      <MainPage />
    </StateProvider>
  )
}

export default App;
