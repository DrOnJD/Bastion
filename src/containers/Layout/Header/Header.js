import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import actions from 'store/actions/tags';

import styles from './Header.css';


const tags = ['#UNI_2_3', '#UNI_2_2', '#UNI_MINI', '#Купол', '#Ножки', '#Акрил'];

const Header = () => {
  const dispatch = useDispatch();
  const [isOptionsView, setOptionsViewState] = useState(false);
  const [value, setValue] = useState('');
  const handleChangeInput = useCallback(({ currentTarget: { value: val } }) => setValue(val), []);
  const handleKeydownInput = useCallback(({ key }) => { if (key === 'Escape') setOptionsViewState(false); }, []);
  const handleClickInput = useCallback(() => setOptionsViewState(true), []);
  const handleClickTag = useCallback(({ currentTarget: { dataset: { tag } } }) => {
    setOptionsViewState(false);
    dispatch(actions.add(tag));
    setValue('');
  }, [dispatch]);
  return (
    <header>
      <div className={styles.logo}>logo</div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="#tag"
          value={value}
          onClick={handleClickInput}
          onChange={handleChangeInput}
          onKeyDown={handleKeydownInput}
        />
        {isOptionsView && (
          <div className={styles.options}>
            {tags
              .filter((tag) => tag.toLowerCase().includes(value.toLowerCase()))
              .map((tag, i) => (
                <div key={i} data-tag={tag} className={styles.option} onClick={handleClickTag}>{tag}</div> /* eslint-disable-line */
              ))}
          </div>
        )}
      </div>
      <div className={styles.userMenu}>menu</div>
    </header>
  );
};

Header.propTypes = {
};


export default Header;
