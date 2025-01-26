export default function Lista(props) {
    return (
        <div>
            <h1>Lista de alguma coisa</h1>
            <ul style={{
                listStyleType: "none",
                padding: 0,
                margin: 0
            }}>
                {props.children}
            </ul>
        </div>
    )
}