import { Container, DataButton, DataButtonImg, DataContainer, DataInput, Header, IntroductionText, Logo, ModelImg, Span, Title } from "./Introduction.styles"

export const Introduction = () => {
    return (
        <Container>
            <Header>
                <Logo src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="Logo" />
            </Header>
            <ModelImg src={`${process.env.PUBLIC_URL}/assets/images/hero-mobile.jpg`} alt="Model img" />
            <Title>
                <Span>WE'RE</Span>
                COMING
                <br />
                SOON
            </Title>
            <IntroductionText>
                Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
            </IntroductionText>

            <DataContainer htmlFor="dataInput" >
                <DataInput id="dataInput" placeholder="Email Address"></DataInput>
                <DataButton>
                    <DataButtonImg src={`${process.env.PUBLIC_URL}/assets/images/icon-arrow.svg`} alt="Arrow img" />
                </DataButton>
            </DataContainer>
        </Container>
    )
}