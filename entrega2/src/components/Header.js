import postIt from "../imagem/postIt.png";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;

  & h1 {
    color: black;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <img src={postIt} alt="icon" width="75px" />
      <h1>React Notes</h1>
    </StyledHeader>
  );
}

export default Header;
