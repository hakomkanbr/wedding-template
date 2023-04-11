import { BannerStyle } from "./style";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";
import CustomImage from "components/utils/c-image";

export default function CoBanner() {
    return (
        <BannerStyle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><CustomImage width="100%" height="100%" layout="fill" src="/assets/images/slider-2.jpg" /></SwiperSlide>
                <SwiperSlide><CustomImage width="100%" height="100%" layout="fill" src="/assets/images/slider.jpg" /></SwiperSlide>
                <SwiperSlide><CustomImage width="100%" height="100%" layout="fill" src="/assets/images/slider-3.jpg" /></SwiperSlide>
            </Swiper>
        </BannerStyle>
    );
}