import styled from "styled-components";

export const StyledLeftContainer = styled.div`
  margin-top: 10px;
  background-color: #f2f2f2;
  border-radius: 1%;
  width: 75%;
  float: left;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  padding: 10px;
  display: grid;

  & ul {
    list-style-type: none;
    font-size: 20px;
  }

  & h2 {
    padding-left: 100px;
  }

  & li {
    padding-left: 300px;
  }

  & .btnRemover {
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 15px 30px;
    text-align: center;
    font-size: 15px;
    letter-spacing: 1px;
    text-decoration: none;
    color: rgb(193, 163, 98);
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid rgb(193, 163, 98);
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 rgb(193, 163, 98);
    font-weight: 600;
  }

  & .btnRemover:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #ff6961;
    border: 2px solid #ff6961;
  }

  &btnRemover:active {
    transform: scale(0.9);
  }

  & .btnEmAndamento {
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 15px 30px;
    text-align: center;
    font-size: 15px;
    letter-spacing: 1px;
    text-decoration: none;
    color: rgb(193, 163, 98);
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid rgb(193, 163, 98);
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 rgb(193, 163, 98);
    font-weight: 600;
  }

  & .btnEmAndamento:hover {
    color: black;
    box-shadow: inset 0 -100px 0 0 #ffff73;
  }

  & .btnEmAndamento:active {
    transform: scale(0.9);
  }

  & .btnConcluido {
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 15px 30px;
    text-align: center;
    font-size: 15px;
    letter-spacing: 1px;
    text-decoration: none;
    color: rgb(193, 163, 98);
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid rgb(193, 163, 98);
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 rgb(193, 163, 98);
    font-weight: 600;
  }

  & .btnConcluido:hover {
    color: black;
    box-shadow: inset 0 -100px 0 0 #c6e5b1;
    border: 2px solid #c6e5b1;
  }

  & .btnConcluido:active {
    transform: scale(0.9);
  }

  & .btnNaoIni {
    position: relative;
    display: inline-block;
    margin: 15px;
    padding: 15px 30px;
    text-align: center;
    font-size: 15px;
    letter-spacing: 1px;
    text-decoration: none;
    color: rgb(193, 163, 98);
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border: 2px solid rgb(193, 163, 98);
    border-radius: 10px;
    box-shadow: inset 0 0 0 0 rgb(193, 163, 98);
    font-weight: 600;
  }

  & .btnNaoIni:hover {
    color: black;
    box-shadow: inset 0 -100px 0 0 #cfcfc4;
    border: 2px solid #cfcfc4;
  }

  & .btnNaoIni:active {
    transform: scale(0.9);
  }
`;
