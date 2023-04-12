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
                <FlexDiv cstyle={`
                    @media (max-width:767px){
                            flex-direction: column-reverse;
                            align-items: center;
                    }
                `} justifyContent="space-between">
                    <Button type="text" onClick={() => {
                        window.open("//api.whatsapp.com/send?phone=+972502885338&text=لقد أحببت خدمتك..")
                    }}><TbBrandWhatsapp />تواصل معنا </Button>
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
                                ألبوم الصور
                            </a>
                        </Link>
                        <Link href="/">
                            <a onClick={(e) => {
                                e.preventDefault();
                                router.push("/#myPhotos")
                            }}>
                                خدماتنا
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
