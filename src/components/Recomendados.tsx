import Horacio from '../assets/horacio.png'
import "../styles/Recomendados.css"
function Recomendados() {
    return (
        <>
            <h2>Recomendados</h2>
            <div className="perfiles-recomendados">
                <div className="perfil-recomendado">
                    <h3>Horacio Quiroga</h3>
                    <p>84 años</p>
                    <img src={Horacio} />
                </div>
                <div className="perfil-recomendado">
                    <h3>Horacio Quiroga</h3>
                    <p>84 años</p>
                    <img src={Horacio} />
                </div>
                <div className="perfil-recomendado">
                    <h3>Horacio Quiroga</h3>
                    <p>84 años</p>
                    <img src={Horacio} />
                </div>
                <div className="perfil-recomendado">
                    <h3>Horacio Quiroga</h3>
                    <p>84 años</p>
                    <img src={Horacio} />
                </div>
                


            </div>
        </>
    )
}

export default Recomendados;