const EventSubject = () => {

  // private
  const observers = [];
  const events = [];

  // private
  const notify = event => {
    events.push(event)
    observers.forEach(o => o(events))
  }

  // public
  const attach = observer => {
    observers.push(observer)
  };

  // public
  const detach = observer => {
    observers.filter(o => o !== observer)
  };

  // public
  const updateEvents = event => {
    notify(event);
  };

  return {
    attach,
    detach,
    updateEvents
  };
}

const eventSubject = EventSubject();

export default eventSubject;