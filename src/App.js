import React from 'react';

// local imports
import Layout from './components/Layout/Layout';
import Welcome from './sections/Welcome/Welcome';
import Clock from './sections/Clock/Clock';
import Stats from './sections/Stats/Stats';
import Preferences from './sections/Preferences/Preferences';
import PreferencesContextProvider from './contexts/preferencesContext';
import './app.scss'
 
const App = () => {

  return (
    <div className="app">
      <PreferencesContextProvider>
        <Layout>
          <Welcome />
          <Preferences />
          <Clock />
          <Stats />
        </Layout>
      </PreferencesContextProvider>
    </div>
  )
}
 
export default App;