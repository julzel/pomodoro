import React, { useState } from 'react';

// local imports
import Welcome from './components/Welcome';
import MyPomodoros from './components/MyPomodoros';
import Settings from './components/Settings';
import SimplePomodoro from './components/SimplePomodoro';
import Preferences from './components/Preferences';

const DashboardUI = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="dashboard-ui">
        <Preferences />
        {!selectedOption && <Welcome title={'Ready to get things done?'} setSelectedOption={setSelectedOption}/>}
        {selectedOption === 'default' && <SimplePomodoro />}
        {selectedOption === 'pomodoros' && <MyPomodoros />}
      <Settings />
    </div>
  );
}
 
export default DashboardUI;
