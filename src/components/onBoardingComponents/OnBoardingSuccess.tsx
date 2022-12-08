import logo from "../../assets/logoRegister.svg";
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

type Props = {
    modalState: boolean
    modalSuccess: boolean
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
    setModalSuccess: React.Dispatch<React.SetStateAction<boolean>>
};

const OnBoardingSuccess = ({
    modalState,
    modalSuccess,
    setModalState,
    setModalSuccess
}: Props) => {
    const handleClose = () => {
        setModalSuccess(false)
        setModalState(false)
    }

    return (
        <>
        {modalState && modalSuccess ?
        <>
        <div className='w-full h-full fixed top-0 left-0 bg-black/50 flex flex-col items-center
        justify-center'>
            <div className="formModalSuccessXl fixed top-0 left-0 w-full h-full grid place-items-center">
                <div className="formModalSuccess fadeInModal">
                    <div className="w-64">
                        <img src={logo} alt="Matcher logo" className="w-full block" />
                    </div>
                    <div className="text-[#ed3434] textShadowSm">
                        <p className="text-center font-bold text-3xl">
                            ¡Felicitaciones!
                        </p>
                        <p className="text-center font-semibold text-2xl px-6 leading-6 mt-5">
                            ¡Ya formas parte de nuestra comunidad!
                        </p>
                    </div>
                    <div className="mt-7">
                    <Link to="feed">
                        <button type="button" className="btnSubmitGradient uppercase textShadowSm
                        btnTransition flex justify-center items-center btnShadow shadow-md font-bold
                        tracking-wider gap-2 text-[#FFEAEA] rounded-full px-6 py-2"
                        onClick={() => handleClose()}>
                            <p className="textShadowSm">Ir al inicio</p>
                            <FaHeart size={18} className="textShadowSm" />
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        </> 
        : null}
        </>
    )
}

export default OnBoardingSuccess;
