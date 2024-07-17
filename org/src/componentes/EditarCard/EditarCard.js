import "./EditarCard.css";
import InputsEditar from "../InputEditar/InputEditar";

const FormularioEdit = () => {
    return <section className="formulario_editar">
        <form>
           <h2>EDITAR CARD</h2>
           <InputsEditar titulo="Título" />
           <InputsEditar titulo="Imagen" /> 
           <InputsEditar titulo="Video" />  
        </form>
    </section>
}

export default FormularioEdit