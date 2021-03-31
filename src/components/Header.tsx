import styles from '../styles/components/Header.module.css';

export function Header(props) {
  return (
    <div className={styles.headerOuter}>
      <div className={ `${styles.headerInner} ${styles.responsiveWrapper}` }>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}