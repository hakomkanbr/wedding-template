import { NavbarStyle } from "./style";
import Container from "components/utils/container";
import FlexDiv from "components/utils/flex-div";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Text from "components/utils/text";
import { Button } from "antd";
import { TbBrandWhatsapp } from "react-icons/tb";

export default function CoNavbar() {
    const router = useRouter();
    return (
        <NavbarStyle id="myNavbar">
            <Container>
                <FlexDiv justifyContent="space-between">
                    <Button type="text"><TbBrandWhatsapp />تواصل معنا </Button>
                    <nav>
                        <Link href="#">
                            <a onClick={(e) => {
                                e.preventDefault();
                                router.push("/#myMap")
                            }}>
                                موقعنا
                            </a>
                        </Link>
                        <Link href="/">
                            <a onClick={(e) => {
                                e.preventDefault();
                                router.push("/#myPhotos")
                            }}>
                                بعض الصور عنا
                            </a>
                        </Link>
                        {/* <Link href="/">
                            <a onClick={(e) => {
                                e.preventDefault();
                                router.push("/templates")
                            }}>
                                قوالب متجرنا
                            </a>
                        </Link> */}
                    </nav>
                    <Text as="h1" margin={[5, 0]}>قصر الوادي</Text>
                </FlexDiv>
            </Container>
        </NavbarStyle>
    );
}
