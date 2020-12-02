import { useState } from 'react';


const useToggle = (defaultState = false) => {
  const [state, setState] = useState(defaultState);
  return [state, () => setState(!state)];
};

export {
  useToggle,
};
