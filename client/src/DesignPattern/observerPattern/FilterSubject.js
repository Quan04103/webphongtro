import { useState } from 'react';

const FilterSubject = () => {
  const [observers, setObservers] = useState([]);

  const subscribe = (observer) => {
    setObservers([...observers, observer]);
  };

  const unsubscribe = (observer) => {
    setObservers(observers.filter((obs) => obs !== observer));
  };

  const notify = (queries) => {
    observers.forEach((observer) => observer.update(queries));
  };

  return {
    subscribe,
    unsubscribe,
    notify,
  };
};

export default FilterSubject;
