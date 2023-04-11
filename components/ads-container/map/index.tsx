import { Col, Row } from "antd";
import Container from "components/utils/container";
import Text from "components/utils/text";
import { FooterStyle } from "./style";

export default function CoMap() {
    return (
        <div id="myMap">
            <iframe style={{ margin: "20px 0 80px 0" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3661.5321238190627!2d35.205684248013675!3d31.783525143104328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7683c25226b%3A0x87c1fc7144748ae2!2zVkVSVCBKZXJ1c2FsZW0gSG90ZWwg157XnNeV158g15XXldeo15gg15nXqNeV16nXnNeZ150!5e0!3m2!1sar!2str!4v1681245611122!5m2!1sar!2str" width="100%" height="700" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}
