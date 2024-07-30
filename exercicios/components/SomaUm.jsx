export default function SomaUm(props) {
    // props.numero++
    // OBS: Propriedades são somente leitura
    return (
        <div>
            <h1>{props.numero + 1}</h1>
            {/* Neste caso é necessário fazer uma operação aqui */}
        </div>
    )
}