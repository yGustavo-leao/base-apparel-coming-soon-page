import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    place-items: center;
    grid-template-areas:
    "header"
    "img"
    "title"
    "introductionText"
    "dataContainer";
    height: 100vh;

    @media (min-width: 932px) {
        grid-template-areas:
        "header img"
        "title img"
        "introductionText img"
        "dataContainer img";
        place-items: start;
        padding-left: 2rem;
        grid-template-rows: max-content max-content 150px auto;
    }

    @media (min-width: 1200px) {
        padding-left: 6rem;
    }

    @media (min-width: 1400px) {
        padding-left: 14rem;
    }
`

export const Header = styled.header`
    grid-area: header;
    display: flex;
    width: 100%;
    padding: 2rem;

    @media (min-width: 932px) {
        align-self: center;
    }
`

export const Logo = styled.img`
    width: 100px;

    @media (min-width: 932px) {
        width: 200px;
    }
`

export const ModelImg = styled.img`
    grid-area: img;
    margin-bottom: 1rem;
    width: 100%;
    max-width: 500px;

    @media (min-width: 932px) {
        content: url(${process.env.PUBLIC_URL}/assets/images/hero-desktop.jpg);
        margin-bottom: 0;
        width: auto;
        max-width: none;
        height: 100%;
        object-fit: cover;
        justify-self: end;
    }
`

export const Title = styled.h1`
    grid-area: title;
    width: max-content;
    line-height: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #413a3a;
    letter-spacing: 10px;
    margin-top: 2rem;

    @media (min-width: 932px) {
        font-size: 2.5rem;
        line-height: normal;
        text-align: start;
        align-items: start;
        align-self: end;
    }

    @media (min-width: 1200px) {
        font-size: 4rem;
    }
`

export const Span = styled.span`
    display: flex;
    color: #ce9797;
    font-weight: 300;
    letter-spacing: 10px;
`

export const IntroductionText = styled.p`
    grid-area: introductionText;
    max-width: 300px;
    color: #ce9797;
    line-height: 1.5rem;
    text-align: center;
    margin: 1rem 0 2rem 0;

    @media (min-width: 932px) {
        align-self: start;
        text-align: start;
        max-width: 400px;
    }
`

export const DataContainer = styled.label`
    grid-area: dataContainer;
    width: 300px;
    display: flex;
    justify-content: center;
    height: 3rem;
    border: 1px solid #ce9797;
    border-radius: 6rem;

    @media (min-width: 932px) {
        align-self: start;
    }

    @media (min-width: 1200px) {
        width: 450px;
    }
`

export const DataInput = styled.input`
    border-top-left-radius: 6rem;
    border-bottom-left-radius: 6rem;
    padding-left: 1rem;
    flex-grow: 1;
    border: none;
    outline: none;
`

export const DataButton = styled.button`
    width: 4rem;
    border-radius: 4rem;
    border: none;
    background: linear-gradient(135deg, #f8bfbf, #ee8c8c);
`

export const DataButtonImg = styled.img`
`