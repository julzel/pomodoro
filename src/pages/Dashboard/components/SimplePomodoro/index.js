import React from 'react';

// local imports
import eventSubject from '../../../../observers/eventObserver';
import Pomodoro from '../../../../components/Pomodoro'

const SimplePomodoro = () => {

  const onSavePomodoro = () => {
    eventSubject.updateEvents('saving pomodoro');
  };

  const onDeletePomodoro = () => {
    eventSubject.updateEvents('deleting pomodoro');
  };

  return (
    <div>
      <Pomodoro
        onSave={onSavePomodoro}
        onDelete={onDeletePomodoro}
      />
    </div>
  );
};
 
export default SimplePomodoro;