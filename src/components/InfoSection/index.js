import React from "react";
import {
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Subtitle,
    ImgWrap,
    Img,
    Heading,
} from "./InfoElements";

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topline,
    lightText,
    darkText,
    headline,
    description,
    descriptionTwo,
    img,
    alt,
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper className="container">
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topline}</TopLine>
                                {description !== "" ? (
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                ) : null}
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                {descriptionTwo !== "" ? (
                                <Subtitle darkText={darkText}>
                                    {descriptionTwo}
                                </Subtitle>
                                ) : null}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
