import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import actions from 'store/actions';
import { Session, User, Post } from 'store/models';


function App() {
  const dispatch = useDispatch();
  const [id, setRole] = useState();
  useEffect(() => { if (id) dispatch(actions.get(Session, { id }, { current: +id })); }, [dispatch, id]);
  useEffect(() => {
    dispatch(actions.get(User));
    dispatch(actions.get(Post));
  }, [dispatch]);

  return (
    <>
      <select onChange={({ target: { value } }) => setRole(value)}>
        <option value={0}>Root</option>
        <option value={1}>Admin</option>
        <option value={2}>Teammate</option>
        <option value={3}>User</option>
      </select>
      <div>
        <Link to="/collections">collections</Link>
      </div>
    </>
  );
}

export default App;
