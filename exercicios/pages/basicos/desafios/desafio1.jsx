export default function Desafio() {
    
    const lista = []

    function Gerador(max){
        for (var i = 1; i <= max; i++) {
            if (i != max) {
                lista.push(<span>{i}, </span>)
            }
            else {
                lista.push(<span>{i}.</span>)
            }
        }
    }
    
    return (
        <div>
            <h1>Exercício 01</h1>
            {Gerador(20)}
            {lista}
        </div>
    )
}