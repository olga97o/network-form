import styles from './Portal.module.scss';

export const Portal = ({value, pattern}) => {

    const isValid = value && !pattern.test(value);
    return isValid && (
        <div className={styles.portal}>You entered invalid data!</div>
    )
}