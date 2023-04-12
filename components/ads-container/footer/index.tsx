import Text from "components/utils/text";
import { TbArrowTopCircle } from "react-icons/tb";
import { FooterStyle } from "./style";
import { useState, useEffect } from "react";

export default function CoFooter() {
    const [clicked, setClicked] = useState(0);
    const toTop = (e: any) => {
        setClicked(clicked + 1);
    }

    useEffect(() => {
        if (clicked != 0) {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }, [clicked]);
    return (
        <FooterStyle id="myFooter">
            <div className="toTop" onClick={toTop}><TbArrowTopCircle /></div>
            <Text color="#fff" size={60} align="center" margin={0} padding={[15, 0, 0, 0]} as="h1">قصر الوادي</Text>
            <Text color="#fff" size={14} align="center" margin={0} padding={[15, 0]} as="p">created by @applighterz 2023</Text>
        </FooterStyle>
    );
}
