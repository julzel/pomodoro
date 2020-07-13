import React, { useEffect, useState } from 'react';

// local imports
import eventSubject from '../../../../observers/eventObserver';

const Settings = () => {

  const [events, setCurrentEvent] = useState([]);

  const onEventUpdate = events => {
    setCurrentEvent([...events]);
  };

  useEffect(() => {
    eventSubject.attach(onEventUpdate);

    return () => eventSubject.detach(onEventUpdate);
  }, [])

  return (
    <div>
      Events: {events.map((e, i) => <span key={i}>- {e} -</span>)}
    </div>
  );
}
 
export default Settings;
