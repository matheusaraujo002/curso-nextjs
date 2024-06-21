import styles from './integracao1.module.css'

export default function Integracao() {
    return (
        <div id={styles.container}>
            <div className={styles.vermelha}>Texto #1</div>
            <div className={styles.azul}>Texto #2</div>
            <div className={styles.branca}>Texto #3</div>
        </div>
    )
}