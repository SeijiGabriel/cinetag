 import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
            <img src='https://http.cat/images/404.jpg' alt='Não encontrada' />
        </section>
    )
}

export default NaoEncontrada;