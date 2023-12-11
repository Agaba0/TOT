import Slider from "react-slick"
import partners1 from "../../assets/foundationImages/FGN.png"
import partners2 from "../../assets/foundationImages/TEF.webp"
import partners3 from "../../assets/foundationImages/comm.jpg"
import partners4 from "../../assets/foundationImages/nwit.png"
import partners5 from "../../assets/foundationImages/mtn.png"
import partners6 from "../../assets/foundationImages/pgc.png"
import partners7 from "../../assets/foundationImages/sid.png"
import { Card } from "../molecules/Card"



const Partners = () => {
    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],

    };
    return (
        <section className="w-full lg:px-20 px-6 my-16 lg:my-0">
            <Slider {...settings}>
                <Card cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center" imageAlt="partenrsLogo" imageSrc={partners1} imageWrapperClass="w-[120px] h-[50px]" cover="object-contain" />
                <Card cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center" imageAlt="partenrsLogo" imageSrc={partners2} imageWrapperClass="w-[120px] h-[50px]" cover="object-contain" />
                <Card cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center" imageAlt="partenrsLogo" imageSrc={partners3} imageWrapperClass="w-[120px] h-[50px]" cover="object-contain" />
                <Card cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center" imageAlt="partenrsLogo" imageSrc={partners4} imageWrapperClass="w-[120px] h-[50px]" cover="object-contain" />
                <Card cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center" imageAlt="partenrsLogo" imageSrc={partners5} imageWrapperClass="w-[120px] h-[50px]" cover="object-contain" />
                <Card cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center" imageAlt="partenrsLogo" imageSrc={partners6} imageWrapperClass="w-[120px] h-[50px]" cover="object-contain" />
                <Card cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center" imageAlt="partenrsLogo" imageSrc={partners7} imageWrapperClass="w-[120px] h-[50px]" cover="object-contain" />
            </Slider>
        </section>
    )
}

export default Partners