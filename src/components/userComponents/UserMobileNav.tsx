import { FaRedoAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logoRegister.svg";


const UserMobileNav = () => {
    return (
        <div className='w-screen flex items-center justify-around sm:justify-between sm:px-44 bg-[#FF929D] py-3'>
            <img src={logo} alt="Matcher logo" className='block w-36' loading='lazy' />
            <Link to="/feed">
                <div className="btnUserPageGradient sideBarIcon rounded-full p-3">
                    <FaRedoAlt className='-scale-x-100 -rotate-6 text-xl text-[#FFEAEA]'/>
                </div>
            </Link>
        </div>
    )
}

export default UserMobileNav;