import './App.css';
import Header from "./componentes/Header/Encabezado.js";
import FormularioEdit from './componentes/EditarCard/EditarCard.js';
import Banner from './componentes/Banner/Banner.js';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <FormularioEdit />
    </div>
  );
}

export default App;
