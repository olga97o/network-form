import styles from './Buttons.module..scss';

export default function Buttons() {
    return (
        <div className={styles.buttons}>
            <button type="submit">Save</button>
            <button type="reset">Cancel</button>
        </div>
    )
}