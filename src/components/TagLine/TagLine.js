import React, { useCallback } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import compact from 'lodash/compact';

import actions from 'store/actions/tags';

import styles from './TagLine.css';


const TagLine = () => {
  const { hash } = useLocation();
  const dispatch = useDispatch();
  const onRemove = useCallback(({ currentTarget: { dataset: { tag } } }) => dispatch(actions.remove(tag)), [dispatch]);
  return (
    <div className={styles.tagline}>
      {compact(hash.split(',')).map((tag, i) => (
        <div className={styles.tag} key={i}> {/* eslint-disable-line */}
          {decodeURI(tag)}
          <div className={styles.close} data-tag={tag} onClick={onRemove}>
            <div className={styles.first} />
            <div className={styles.second} />
          </div>
        </div>
      ))}
    </div>
  );
};


export default TagLine;
