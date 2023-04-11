import { Col, Row } from "antd";
import Container from "components/utils/container";
import Text from "components/utils/text";
import { FooterStyle } from "./style";

export default function CoFooter() {
    return (
        <FooterStyle id="myFooter">
            <Text color="#fff" size={40} align="center" margin={0} padding={[15, 0, 0, 0]} as="h1">قصر الوادي</Text>
            <Text color="#fff" size={14} align="center" margin={0} padding={[15, 0]} as="p">created by @applighterz 2023</Text>
        </FooterStyle>
    );
}
