import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'class-names';

import { selectModelsArray } from 'store/selectors/models';
import actions from 'store/actions/models';
import { Notification } from 'store/models/models';

import styles from './Notifications.css';


const Notifications = () => {
  const dispatch = useDispatch();
  let notifications = useSelector(selectModelsArray(Notification));

  notifications = useMemo(
    () => notifications.map((item) => {
      item.timerId = item.timerId || setTimeout(() => dispatch(actions.remove(Notification, item)), 5000);
      return item;
    }, notifications).slice(-5),
    [notifications, dispatch],
  );


  return (
    <div className={styles.notifications}>
      {notifications.map(({ timerId, message, status }) => (
        <div
          key={timerId}
          className={classnames(styles.notification, {
            [styles.success]: status === 'success',
            [styles.warning]: status === 'warning',
            [styles.error]: status === 'error',
          })}
        >
          {message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
