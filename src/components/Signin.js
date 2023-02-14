import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TokenContext } from "./TokenContext";

export default function Signin(){

    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const { setToken } = useContext(TokenContext);

    const navigate = useNavigate();

    function trySignIn(e){
        e.preventDefault();

        const body = {
            email: emailValue,
            password: passwordValue,
        }

        const URL = "http://localhost:5000/sign-in";

        const promise = axios.post(URL, body)
        promise.then((res) => {
            console.log(res.data)
            setToken(res.data.token)
            navigate("/");
        })
        promise.catch((err) => {
            console.log(err.response.data)
            alert("Ocorreu um erro, tente novamente!");
        })

    }
    function goToSignUp(){
        
        navigate("/sign-up")
    }

    return(
        <Container>
            <Logo>My Wallet</Logo>
            <form onSubmit={trySignIn}>
            <Field placeholder="E-mail" type="email" id="emailField" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} required/>
            <Field placeholder="Senha" type="password" id="passwordField" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} required/>
            <StyledButton type="submit">Entrar</StyledButton>
            </form>
            <StyledText onClick={() => goToSignUp()}>Primeira vez? Cadastre-se!</StyledText>
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
width: 100%;
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
:hover{
    cursor:pointer;
}
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
:hover{
    cursor:pointer;
}
`