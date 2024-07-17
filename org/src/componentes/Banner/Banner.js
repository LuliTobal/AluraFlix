import "./Banner.css"

function Banner(){
    return <section className="baner_destacado">
            <div className="fondo_banner">
                <img src="/img/fondo-banner.png" alt="imagen destacado" />
            </div>
            <div className="card_banner_destacado">               
                <div className="texto_destacado">
                    <h1 className="titulo_categoria">Front End</h1>
                    <h3 className="subtitulo_banner">Challenge React</h3>
                    <p className="texto_banner">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
                <div className="img_banner_destacada">
                    <img className="video_destacado" src="/img/img-video-destacado.jpg" alt="imagen video destacado" />
                </div>
            </div>
        </section>
}

export default Banner