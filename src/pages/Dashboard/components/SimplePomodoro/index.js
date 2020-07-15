import React from 'react';

// local imports
import eventSubject from '../../../../observers/eventObserver';
import Pomodoro from '../../../../components/Pomodoro'

const SimplePomodoro = () => {

  const events = {
    onSavePomodoro: () => {
      eventSubject.updateEvents('saving pomodoro');
    },
    onDeletePomodoro: () => {
      eventSubject.updateEvents('deleting pomodoro');
    }
  };

  return (
    <div>
      <Pomodoro
        events={events}
      />
    </div>
  );
};
 
export default SimplePomodoro;