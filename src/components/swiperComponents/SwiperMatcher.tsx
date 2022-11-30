import { Swiper } from '../';

const SwiperMatcher = () => {
    const swiperSlides = [
        {url: "https://i.ibb.co/k1F61YG/card-profile.png"},
        {url: "https://i.ibb.co/pZrkmwQ/sina-rezakhani-XES0z8w0-Ugc-unsplash.jpg"},
        {url: "https://i.ibb.co/cTcGd7Y/artsiom-kavaliou-u5-WQ-i-ML1-R8-unsplash.jpg"},
        {url: "https://i.ibb.co/ysb1CKd/jonathan-mendoza-Klcw-ZJgv-MC8-unsplash.jpg"},
    ]

    return (
    <div className='relative w-72 h-[22rem] md:h-[23rem] md:w-[25.5rem] cardShadow'>
        <Swiper swiperSlides={swiperSlides} />
    </div>
    )
}

export default SwiperMatcher;