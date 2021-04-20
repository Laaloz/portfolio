import React from 'react'
import {Button} from '../ButtonElements'
import {InfoContainer, InfoRow, InfoWrapper, Column1, Column2, TextWrapper, TopLine, Subtitle, BtnWrap, ImgWrap, Img, Heading} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topline, lightText, darkText, headline, description, descriptionTwo, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topline}</TopLine>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <Heading lightText={lightText}>{headline}
                                </Heading>
                                <Subtitle darkText={darkText}>{descriptionTwo}</Subtitle>
                                <BtnWrap>
                                    <Button to="Blog" 
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}                                 
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    )
}

export default InfoSection
