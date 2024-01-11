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
    $lightbg,
    id,
    $imgstart,
    topline,
    $lighttext,
    darkText,
    headline,
    description,
    descriptionTwo,
    img,
    alt,
}) => {
    return (
        <>
            <InfoContainer $lightbg={$lightbg.toString()} id={id}>
                <InfoWrapper className="container">
                    <InfoRow $imgstart={$imgstart.toString()}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topline}</TopLine>
                                {description !== "" ? (
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                ) : null}
                                <Heading $lighttext={$lighttext.toString()}>
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
                                <Img loading="lazy" src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
