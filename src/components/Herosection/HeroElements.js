import styled from 'styled-components'
import imageOne from '../../images/eka-webbi.png'
import koodi from '../../images/code-mobile.svg'

export const HeroContainer = styled.div`
    background: #F3F3F3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 24px;
    height: 822px;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const BgPicture = styled.image`
    background-image: url(${imageOne});
    background-repeat: no-repeat;
    display: block;
    height: 100%;
    width: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: center;
    z-index: -10;
`

export const HeroWrapper = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0;
max-width: 1055px;
`

export const HeroH1 = styled.div`
    font-size: 2rem;
    font-weight: bold;
    padding-left: 2rem;
    color: #CBCBCB;

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
        bottom: 2rem;
        position: absolute
    }
`

export const Hero1H1 = styled.div`
    font-size: 2rem;
    font-weight: bold;
    padding: 0;
    color: #CBCBCB;
    margin-top: 2rem;
    padding-left: 50vw;

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
        bottom: 4rem;
        padding: 0;
        right: 3rem;
        position: absolute;
    }
`

export const CodeImg = styled.img.attrs({
    src: `${koodi}`
})`
    width: 35px;
    height: 35px;
    display: grid;
    margin-left: 1.7rem;
    margin-top: -.8rem;

    @media screen and (max-width: 768px) {
        bottom: -1.3rem;
        right: 1.2rem;
        position: absolute;
    }
`