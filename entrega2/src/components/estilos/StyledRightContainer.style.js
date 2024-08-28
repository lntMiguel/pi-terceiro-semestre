import styled from 'styled-components'

export const StyledRightContainer = styled.div`
  right: 50px;
  padding: 10px;
  margin-top: 10px;
  position: fixed;
  background-color: #f2f2f2;
  border-radius:5%;
  box-shadow:0 1px 1px rgba(0, 0, 0, 0.3);

  display: grid;
  align-items: center;

  & h2 {
    text-align: center;
  }

  & div {
    padding: 10px;
  }

  & .botao {
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 18px;
  color: rgb(193, 163, 98);
  border: 2px solid rgb(193, 163, 98);
  border-radius: 34px;
  background-color: transparent;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
}

& .botao::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: #ffff73;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

& .botao:hover::before {
  scale: 3;
}

& .botao:hover {
  color: #212121;
  scale: 1.1;
  box-shadow: 0 0px 20px rgba(193, 163, 98,0.4);
}

& .botao:active {
  scale: 1;
}

& .divBotao{
    text-align:center;

}
`