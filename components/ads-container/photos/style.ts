import styled from "styled-components";

export const OfferStyle = styled.div`
    margin-top:40px;
    padding:15px 0;
    .swiper {
        width: 100%;
        height: 100%;
        margin:50px 0;
    }

    .swiper-button-next{
        right:2px;
    }
    .swiper-button-prev{
        left:-2px;
    }
    .swiper-button-next,
    .swiper-button-prev{
        background: white;
        padding:14px 23px;
        border-radius: 50%;
        &:after{
            font-size: 17px;
            position: relative;
            font-weight: bold;
            top: 1px;
            color: #3f3d3d;
        }
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;