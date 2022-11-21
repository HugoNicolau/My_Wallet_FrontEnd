import styled from "styled-components";
import {RiLogoutBoxRLine} from "react-icons/ri"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

export default function Balance(){

    return(
        <Container>
            <HeaderContainer>
                <h1>
                    Olá Fulano
                </h1> 
                <h1>
                    <RiLogoutBoxRLine/>
                </h1>
                </HeaderContainer>
            <BoxContainer>
                <NoData>
                    <h1>
                    Não há registros de
entrada ou saída
                    </h1>
                </NoData>
            </BoxContainer>
            <ButtonContainer>

            <NewButton>
                <AiOutlinePlusCircle/>
                <h1>Nova Entrada</h1>
            </NewButton>
            <NewButton>
                <AiOutlineMinusCircle/>
                <h1>Nova Saída</h1>
            </NewButton>
            </ButtonContainer>
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
margin-bottom:22px;
`

const BoxContainer = styled.div`
height: 446px;
width: 100%;
background-color:#ffffff;
border-radius: 5px;
font-family: Raleway;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: center;
`
const NoData = styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
font-family: Raleway;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: center;
color: #868686;
h1{
    width:60%;
}

`

const ButtonContainer = styled.div`
display:flex;
column-gap:15px;
padding-top: 13px;

`
const NewButton = styled.div`
height: 114px;
width: 100%;
padding:10px;
border-radius: 5px;
background-color:#A328D6;

display:flex;
flex-direction:column;
justify-content:space-between;
font-family: Raleway;
font-size: 17px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:#ffffff;


`