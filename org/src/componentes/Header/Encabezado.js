import "./Header.css"

function Header(){
    return <header className="cabecera">
        <img className="logo" src="/img/favicon.svg" alt="logo de Aluraflix" />
        <ul className="btn_container">
            <li><button className="btn">HOME</button></li>
            <li><button className="btn">NUEVO VIDEO</button></li>
        </ul>
    </header>
}

export default Header