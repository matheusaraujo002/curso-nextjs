import Estilo from "@/components/Estilo";

export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero={3} color='#FFF' direita/>
            <Estilo numero={-13} color='#FFF' direita={false}/>
            <Estilo numero={10000} color='#FFF' direita={true}/>
        </div>
    )
}