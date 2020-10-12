import React from 'react';
import { useDispatch } from 'asd';
import actions from 'actions';
import { User } from 'models';

function App() {
  console.log(User.modelName)
  useDispatch(actions.add, User, { name: 'Вася', id: 0  })
  useDispatch(actions.update, User, { name: 'Олег', id: 0  })
  useDispatch(actions.delete, User, { id: 0 })
  return 'App';
}

export default App;
