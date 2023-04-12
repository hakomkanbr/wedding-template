import { Col, Row } from "antd";
import CustomImage from "components/utils/c-image";
import Container from "components/utils/container";
import FlexDiv from "components/utils/flex-div";
import Text from "components/utils/text";
import { OffersStyle } from "./style";

export default function CoOurServices() {
    return (
        <OffersStyle>
            <Container>
                <Text as="h1" align="center" margin={0}>خدماتنا</Text>
                <Text as="p" align="center" margin={0}>بشغف</Text>
                <Row gutter={[16, 16]}>
                    <Col sm={{ span: 8 }}>
                        <FlexDiv>
                            <div>
                                <Text as="h5" size={18} margin={[25, 15, 0, 0]}>تصميم الأزهار</Text>
                                <Text as="p" size={15} margin={[10, 15, 0, 0]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat purus sed tempus ornare. Sed convallis eu orci.</Text>
                            </div>
                            <div>
                                <img src="/assets/images/img1.svg" width={100} height={150} />
                            </div>
                        </FlexDiv>
                    </Col>
                    <Col sm={{ span: 8 }}>
                        <FlexDiv>
                            <div>
                                <Text as="h5" size={18} margin={[25, 15, 0, 0]}>كشك تصوير</Text>
                                <Text as="p" size={15} margin={[10, 15, 0, 0]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat purus sed tempus ornare. Sed convallis eu orci.</Text>
                            </div>
                            <div>
                                <img src="/assets/images/img2.svg" width={100} height={150} />
                            </div>
                        </FlexDiv>
                    </Col>
                    <Col sm={{ span: 8 }}>
                        <FlexDiv>
                            <div>
                                <Text as="h5" size={18} margin={[25, 15, 0, 0]}>أفضل المطاعم</Text>
                                <Text as="p" size={15} margin={[10, 15, 0, 0]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat purus sed tempus ornare. Sed convallis eu orci.</Text>
                            </div>
                            <div>
                                <img src="/assets/images/img3.svg" width={100} height={150} />
                            </div>
                        </FlexDiv>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col sm={{ span: 8 }}>
                        <FlexDiv>
                            <div>
                                <Text as="h5" size={18} margin={[25, 15, 0, 0]}>كعكة الزفاف</Text>
                                <Text as="p" size={15} margin={[10, 15, 0, 0]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat purus sed tempus ornare. Sed convallis eu orci.</Text>
                            </div>
                            <div>
                                <img src="/assets/images/img4.svg" width={100} height={150} />
                            </div>
                        </FlexDiv>
                    </Col>
                    <Col sm={{ span: 8 }}>
                        <FlexDiv>
                            <div>
                                <Text as="h5" size={18} margin={[25, 15, 0, 0]}>الدعوات</Text>
                                <Text as="p" size={15} margin={[10, 15, 0, 0]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat purus sed tempus ornare. Sed convallis eu orci.</Text>
                            </div>
                            <div>
                                <img src="/assets/images/img5.svg" width={100} height={150} />
                            </div>
                        </FlexDiv>
                    </Col>
                    <Col sm={{ span: 8 }}>
                        <FlexDiv>
                            <div>
                                <Text as="h5" size={18} margin={[25, 15, 0, 0]}>شهر العسل</Text>
                                <Text as="p" size={15} margin={[10, 15, 0, 0]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat purus sed tempus ornare. Sed convallis eu orci.</Text>
                            </div>
                            <div>
                                <img src="/assets/images/img6.svg" width={100} height={150} />
                            </div>
                        </FlexDiv>
                    </Col>
                </Row>
            </Container>
        </OffersStyle>
    );
}
