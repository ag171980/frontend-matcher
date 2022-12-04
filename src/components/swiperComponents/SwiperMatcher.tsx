import { Swiper } from '../';
type Props = {
    user: any
    indice:number
}
const SwiperMatcher = ({user,indice}:Props) => {
    // console.log(users)
    const swiperSlides = [
        {url: "https://i.ibb.co/k1F61YG/card-profile.png"},
        {url: "https://i.ibb.co/pZrkmwQ/sina-rezakhani-XES0z8w0-Ugc-unsplash.jpg"},
        {url: "https://i.ibb.co/cTcGd7Y/artsiom-kavaliou-u5-WQ-i-ML1-R8-unsplash.jpg"},
        {url: "https://i.ibb.co/ysb1CKd/jonathan-mendoza-Klcw-ZJgv-MC8-unsplash.jpg"},
    ]
    // const swiperSlides = [
    //     {url: user.img1},
    //     {url: user.img2},
    //     {url: user.img3},
    //     {url: user.img4},
    // ]

    return (
    <div className='relative w-72 h-[22rem] md:h-[23rem] md:w-[25.5rem] cardShadow'>
        <Swiper swiperSlides={swiperSlides} user={user} indice={indice} />
    </div>
    )
}

export default SwiperMatcher;