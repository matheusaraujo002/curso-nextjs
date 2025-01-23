export default function Repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Daniel',
        'Laura',
        'Carlos',
        'Bia'
    ]

    // Alternativa Manual

/* 
    function renderizarLista() {
        const itens = []

        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li key={i}>{listaAprovados[i]}</li>)
        }

        return itens
    }
 */


    // Alternativa com Map()

    function renderizarLista() {
        return listaAprovados.map(nome => <li>{nome}</li>)
    }

    return (
        <ul>
            {renderizarLista()}
        </ul>
    )
}