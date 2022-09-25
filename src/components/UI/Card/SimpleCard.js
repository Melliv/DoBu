import styles from './SimpleCard.module.css';

export default function SimpleCard(props) {
  return(
    <div className={styles.container}>
      {props.children}
    </div>
  )
}