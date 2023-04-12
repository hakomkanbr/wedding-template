import styled from "styled-components";

export const NavbarStyle = styled.div`
    width:100%;
    padding: 10px 0;
    transition: all 0.2s ease-in-out;
    background:#fff;
    box-shadow: 2px 1px 59px -21px rgba(0,0,0,0.75);
    -webkit-box-shadow: 2px 1px 59px -21px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 1px 59px -21px rgba(0,0,0,0.75);
    h1{
            font-weight: bold;
    font-family: ui-monospace;
    font-size: 41px;
    }
    .ant-btn{
        height: 45px;
        background: #00d4ff;
        color: white;
        font-weight: bolder;
        svg{
            position: relative;
            top: 3px;
            left: -5px;
            font-size: 17px;
        }
    }
    ul{
        list-style-type: none;
        display:flex;
        justify-content: center;
        .active{
            font-weight: bold;
        }
        li{
            padding:10px;
            font-size:16px;
        }
    }
    nav{
        padding:16px 0px;
        a{
            padding: 10px 16px;
            font-size: 17px;
        }
    }
`;