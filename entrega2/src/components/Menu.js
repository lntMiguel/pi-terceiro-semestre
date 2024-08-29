import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffff73;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

  & a {
    font-size: 17px;
    font-weight: bold;
    padding: 14px;
    color: black;
    transition: background-color 0.5s;
    text-decoration: none;
  }

  & a:hover {
    background-color: rgb(235, 235, 232);
    transition: background-color 0.5s;
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <a href="#aFazer">A Fazer</a>
      <a href="#emAndamento">Em Andamento</a>
      <a href="#concluida">Concluído</a>
    </StyledMenu>
  );
}
export default Menu;
