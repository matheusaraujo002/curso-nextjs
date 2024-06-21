export default function Fragment() {
    /* return (
        <h1>Título</h1>
        <h2>Título</h2>
        
        // Erro de Adjacent Elements
    ) */

    // Solução:

    return (
        <>
            <h1>Título</h1>
            <h2>Título</h2>
        </>
    )

    //OBS: Deste modo, não é preciso criar outra div para resolver esse problema, basta criar um "fragment vazio": <> e </>
}