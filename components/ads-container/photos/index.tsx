// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import CustomImage from "components/utils/c-image";
import Container from "components/utils/container";
import Text from "components/utils/text";
import { OfferStyle as PhotosStyle } from "./style";
import { Image } from "antd";

const data1 = [
    "/assets/images/photo-1.jpg",
    "/assets/images/photo-2.jpg",
    "/assets/images/photo-3.jpg",
    "/assets/images/photo-4.jpg",
    "/assets/images/photo-5.jpg",
    "/assets/images/photo-6.jpg",
    "/assets/images/photo-7.jpg",
    "/assets/images/photo-8.jpg",
    "/assets/images/photo-9.jpg",
    "/assets/images/photo-10.jpg",
];
const data2 = [
    "/assets/images/photo-11.jpg",
    "/assets/images/photo-12.jpg",
    "/assets/images/photo-13.jpg",
    "/assets/images/photo-14.jpg",
    "/assets/images/photo-15.jpg",
    "/assets/images/photo-16.jpg",
    "/assets/images/photo-17.jpg",
    "/assets/images/photo-18.jpg",
    "/assets/images/photo-19.jpg",
    "/assets/images/photo-20.jpg",
];
const data3 = [
    "/assets/images/photo-21.jpg",
    "/assets/images/photo-22.jpg",
    "/assets/images/photo-23.jpg",
    "/assets/images/photo-24.jpg",
    "/assets/images/photo-25.jpg",
    "/assets/images/photo-26.jpg",
    "/assets/images/photo-27.jpg",
    "/assets/images/photo-28.jpg",
    "/assets/images/photo-29.jpg",
    "/assets/images/photo-30.jpg",
];

const SwiperRender = ({ data }: any) => (
    <Image.PreviewGroup preview={{
    }}>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                425: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }}
            navigation={true} modules={[Navigation]}
            className="mySwiper"
        >
            {
                data.map((item: string, index: number) => (
                    <SwiperSlide key={index}>
                        <Image width="100%" height={300} src={item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </Image.PreviewGroup>
)

export default function CoPhotos() {
    return (
        <PhotosStyle id="myPhotos">
            <Container>
                <Text as="h1" align="center">بعض الصور من صالتنا</Text>
                <SwiperRender data={data1} />
                <SwiperRender data={data2} />
                <SwiperRender data={data3} />
            </Container>
        </PhotosStyle>
    );
}
