import Titulo from '../../components/Titulo';

export default function usandoTitulo() {
    return (
        <div>
            <Titulo 
                principal="Título principal"
                secundario="Subtítulo principal"
            />
            <Titulo 
                principal="Título secundario"
                secundario="Subtítulo secundario"
                pequeno/* ={true} */ 
                //OBS: Neste caso não é preciso passar o valor (true), pois só de já ter o parametro, isso indica que é true.
            />
            <Titulo 
                principal="Título principal"
                secundario="Subtítulo principal"
                pequeno={false}
            />
        </div>
    )
}