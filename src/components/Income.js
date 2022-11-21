import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TokenContext } from "./TokenContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function Income(){

    const [descriptionValue, setDescriptionValue] = useState("");
    const [value, setValue] = useState("");
    const { token } = useContext(TokenContext);
    const date = dayjs().format("DD/MM");
    const navigate = useNavigate();

    function tryInsert(e){
        e.preventDefault();

        const body = {
            value,
            description:descriptionValue,
            type:"income",
            date
        }

        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        const URL = "http://localhost:5000/balance";

        const promise = axios.post(URL, body, config)
        promise.then((res) => {
            console.log(res.data)
           
            navigate("/");
        })
        promise.catch((err) => {
            console.log(err.response.data)
            alert("Ocorreu um erro, tente novamente!");
        })
    }
    

      useEffect(() => {
        if (token.length === 0) {
            navigate("/sign-in");
          }
      
      },[token, navigate]) 
      
    return(
        <Container>
            <HeaderContainer>
                Nova entrada
            </HeaderContainer>
            <form onSubmit={tryInsert}>
            <Field placeholder="Valor" type="number" id="valueField" value={value} onChange={(e) => setValue(e.target.value)} required/>
            <Field placeholder="Descrição" type="text" id="descriptionField" value={descriptionValue} onChange={(e) => setDescriptionValue(e.target.value)} required/>
            <StyledButton type="submit">Salvar entrada</StyledButton>
            </form>
        </Container>
    )
}



const Container = styled.div`

background-color: #8c11be;
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
padding-left: 25px;
padding-right:25px;
padding-top:25px;
padding-bottom:16px;

`
const HeaderContainer = styled.div`
font-family: Raleway;
font-size: 26px;
font-weight: 700;
line-height: 31px;
letter-spacing: 0em;
text-align: left;
color:#ffffff;
display:flex;
justify-content:space-between;
margin-bottom:40px;
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
}`