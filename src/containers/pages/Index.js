import React from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'store/reduxModels';
import actions from 'store/actions';
import { User, Post } from 'store/models';
import { selectModel } from 'store/selectors/models';

function App() {
  useDispatch(actions.add, User, { name: 'Вася', id: 0, postsIds: [0, 1, 2], postId: 2 });
  useDispatch(actions.add, Post, { id: 0, content: 'asd1' });
  useDispatch(actions.add, Post, { id: 1, content: 'asd2' });
  useDispatch(actions.add, Post, { id: 2, content: 'asd3' });
  const asd = useSelector(selectModel(User, 0));
  console.log(asd)
  return 'App';
}

export default App;
