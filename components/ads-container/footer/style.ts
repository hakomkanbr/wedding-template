import styled from "styled-components";

export const FooterStyle = styled.div`
    position: relative;
    background: #075f83;
    text-align:center;
    height: 80vh;
    background-position: center 11%;
    background-image: url(/assets/images/footer-bg.jpg);
    svg{
        font-size: 39px;
        padding-top: 7px;
        animation:pointerMoving 1.3s infinite;
    }
    @keyframes pointerMoving {
	0% {
		-webkit-transform: translateY(5px);
		transform: translateY(5px);
		opacity: 0.5;
	}

	80% {
		-webkit-transform: translateY(-5px);
		transform: translateY(-5px);
		opacity: 1;
	}

	100% {
		-webkit-transform: translateY(5px);
		transform: translateY(5px);
		opacity: 0.5;
	}
}
    .toTop{
      display: inline-block;
    background: #fff;
        cursor: pointer;
    width: 50px;
    position: relative;
    height: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    top: -22px;
    }
    h1{
   
            padding-top: 72px;
    position: relative;
    font-family: cursive;
    }
    p{
        position: relative;
    }
    &::before {
        content: "";
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
`;