import React from 'react';

// local imports
import Layout from './layout';
import Dashboard from './pages/Dashboard';
import PreferencesContextProvider from './contexts/preferencesContext';
 
const App = () => {

  return (
    <div className="app">
      <Layout>
        <PreferencesContextProvider>
          <Dashboard />
        </PreferencesContextProvider>
      </Layout>
    </div>
  )
}
 
export default App;