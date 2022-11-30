import logo from '../../assets/logoLoader.svg';

const FullScreenLoader = () => {
    return (
        <div className='gradientBg h-screen w-screen flex flex-col items-center justify-center'>
            <img src={logo} alt="Matcher logo" className='w-60 sm:w-64 block loadingLogo' />
        </div>
    )
}

export default FullScreenLoader;