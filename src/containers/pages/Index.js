// import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from 'store/actions';
import { User, Post } from 'store/models';
import { selectModelsMap } from 'store/selectors/models';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.get(User));
    dispatch(actions.get(Post));
  }, [dispatch]);
  console.log(useSelector(selectModelsMap(User))); // eslint-disable-line

  return 'App';
}

export default App;
