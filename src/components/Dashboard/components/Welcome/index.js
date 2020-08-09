import React from 'react';

const Welcome = ({ title, setSelectedOption }) => {

  const handleStartPomodoro = () => setSelectedOption('default');

  const handleMyPomodoros = () => setSelectedOption('pomodoros');

  return (
    <div>
     <h1>{title}</h1>
     <button className="btn" onClick={handleStartPomodoro}>Start Pomodoro</button>
     <button className="btn" onClick={handleMyPomodoros}>My Pomodoros</button>
    </div>
  );
}
 
export default Welcome;
