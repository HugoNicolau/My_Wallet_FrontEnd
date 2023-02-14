import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "./TokenContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Balance() {
  const [items, setItems] = useState([]);
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const URL = "http://localhost:5000/balance";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);
    promise.then((res) => {
      setItems(res.data.userBalance);
      setUser(res.data.user.name);
      let cont = 0;
      res.data.userBalance.forEach((item) => {
        item.type === "income"
          ? (cont += Number(item.value))
          : (cont -= Number(item.value));
      });
      setTotalValue(cont);
    });

    if (token.length === 0) {
      navigate("/sign-in");
    }
  }, [token, navigate]);

  return (
    <Container>
      <HeaderContainer>
        <h1>Olá {user}</h1>
        <h1>
          <RiLogoutBoxRLine onClick={() => window.location.reload()} />
        </h1>
      </HeaderContainer>
      <BoxContainer>
        {items.length === 0 ? (
          <NoData>
            <h1>Não há registros de entrada ou saída</h1>
          </NoData>
        ) : (
          <DataAvailable>
            {items.map((i, id) => {
              return (
                <DivItem key={id} type={i.type}>
                  <DivDateName>
                    <h1>{i.date}</h1>
                    <h2>{i.description}</h2>
                  </DivDateName>
                  <h3>
                    R${" "}
                    {Number(i.value).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </h3>
                </DivItem>
              );
            })}
            <BalanceDiv balance={totalValue}>
              <h1>SALDO</h1>
              <h2>
                R${" "}
                {totalValue.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h2>
            </BalanceDiv>
          </DataAvailable>
        )}
      </BoxContainer>
      <ButtonContainer>
        <NewButton
          onClick={() => {
            navigate("/income");
          }}
        >
          <AiOutlinePlusCircle />
          <h1>Nova Entrada</h1>
        </NewButton>
        <NewButton
          onClick={() => {
            navigate("/outcome");
          }}
        >
          <AiOutlineMinusCircle />
          <h1>Nova Saída</h1>
        </NewButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #8c11be;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
  padding-bottom: 16px;
`;
const HeaderContainer = styled.div`
  font-family: Raleway;
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const BoxContainer = styled.div`
  height: 446px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
`;
const NoData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #868686;
  h1 {
    width: 60%;
  }
`;
const DataAvailable = styled.div`
  position: relative;
  height: 100%;
  padding-top: 23px;
  padding-left: 12px;
  padding-right: 11px;
  padding-bottom: 40px;
`;
const DivItem = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #c6c6c6;
  }
  h2 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
  }
  h3 {
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: ${(props) => (props.type === "income" ? "#03ac00" : "#c70000")};
  }
`;
const DivDateName = styled.div`
  display: flex;
  column-gap: 5px;
`;

const BalanceDiv = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  width: 96%;
  justify-content: space-between;
  h1 {
    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
  }
  h2 {
    color: #03ac00;
    color: ${(props) => (props.balance < 0 ? "#c70000" : "#03ac00")};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  column-gap: 15px;
  padding-top: 13px;
`;
const NewButton = styled.div`
  height: 114px;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #a328d6;
  :hover {
    cursor: pointer;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Raleway;
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
