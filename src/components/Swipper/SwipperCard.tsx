import Image from '../../assets/card-profile.png'
import { MdPlace } from 'react-icons/md'
import { RiCloseCircleLine } from 'react-icons/ri'
import { IoHeartCircleOutline } from 'react-icons/io5'
import "../../styles/SwipperCard.css"


function SwipperCard() {
    return (
        <div className="SwipperCard">
            <img src={Image} alt="" />
            <div className="data-card">
                <h1>Ayelen Vargas</h1>
                <h3>24 anios</h3>
                <div className="ubicacion">
                    <MdPlace />
                    <p>San Antonio</p>
                </div>
                <p className="profesion">
                    Estudiante de Turismo
                </p>
            </div>
            <div className="match-buttons">
                <button className='close'><RiCloseCircleLine /></button>
                <button className='heart'><IoHeartCircleOutline /></button>


            </div>
            <div className="descripcion">
                {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe illum, reprehenderit possimus voluptates corrupti quaerat?
                </p> */}
                <button className='leer-mas'>Leer más</button>
            </div>
        </div>
    )
}

export default SwipperCard;