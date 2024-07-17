import "./InputEditar.css"

const InputsEditar = (props) =>{
    const placeHolder = `Ingresar ${props.titulo}`
    return <div>
        <label>{props.titulo}</label>
        <input placeholder={placeHolder} />
    </div>
}

export default InputsEditar