import React from 'react';
import styles from './Loader.module.scss';
import { RotatingLines } from 'react-loader-spinner';

/**
 * Loading Spinner
 *
 * @todo
 * 현재 z-index 를 사용하고 있습니다.
 * 향후, react potal 기능으로 변경해야합니다.
 *
 */
const Loader = ({ basic }) => {
  if (basic) {
    return (
      <div className={styles.basicWrapper}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
