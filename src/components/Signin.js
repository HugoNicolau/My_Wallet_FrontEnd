import styled from "styled-components";


export default function Signin(){


    return(
        <Container>
            <Logo>My Wallet</Logo>
            <Field placeholder="E-mail"/>
            <Field placeholder="Senha"/>
            <StyledButton>Entrar</StyledButton>
            <StyledText>Primeira vez? Cadastre-se!</StyledText>
        </Container>
    )
}

const Container = styled.div`

    background-color: #8c11be;
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding-left:25px;
    padding-right:25px;
`

const Logo = styled.div`
font-family: 'Saira Stencil One';
font-size: 32px;
font-weight: 400;
line-height: 50px;
letter-spacing: 0em;
text-align: left;
color:#ffffff;
height: 50px;
margin-bottom:25px;
border-radius: nullpx;
`

const Field = styled.input`
height: 58px;
width:100%;
border-radius: 5px;
font-family: 'Raleway';
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
padding:15px;
margin-bottom:13px;
box-shadow:none;
border-style:solid;
border:none;
&::placeholder{
color: #000000;
}
`

const StyledButton = styled.button`
background-color: #A328D6;
height: 46px;
width: 326px;
left: 23px;
top: 375px;
border-radius: 5px;
color:#ffffff;
font-family: 'Raleway';
font-size: 20px;
font-weight: 700;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
margin-bottom:36px;
display:flex;
align-items:center;
justify-content:center;
box-shadow:none;
border-style:solid;
border-color:#A328D6;

:active{
    background-color: #b44de0;
}
`
const StyledText = styled.p`
font-family: Raleway;
font-size: 15px;
font-weight: 700;
line-height: 18px;
letter-spacing: 0em;
text-align: left;
color:#ffffff;
`