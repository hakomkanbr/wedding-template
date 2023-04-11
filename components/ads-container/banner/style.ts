import styled from "styled-components";

export const BannerStyle = styled.div`
    height: 100vh;
    .swiper{
        .swiper-wrapper{
            &:after{
                content:"";
                position: absolute;
                width: 100%;
                top: 0;
                z-index: 1;
                height: 100%;
                background-color: #a0c7ce24;
                bottom: 0;
            }
        }
        height:100%;
    }
`;