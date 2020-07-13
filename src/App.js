import React from 'react';
import Layout from './layout';
import Dashboard from './pages/Dashboard';
 
const App = () => {
  return (
    <div className="app">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  )
}
 
export default App;