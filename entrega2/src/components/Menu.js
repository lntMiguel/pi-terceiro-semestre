import styled from 'styled-components' 

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffff73;
  box-shadow:0 1px 1px rgba(0, 0, 0, 0.3);
  
  & p{
        font-size:17px;
        font-weight:bold;
        padding: 14px;
        color: black;
        transition: background-color .5s;
    }

  & p:hover{
        background-color: rgb(235, 235, 232);
        transition: background-color .5s;
    }

`

function Menu(){
    return(
        <StyledMenu>
            <p>A Fazer</p>
            <p>Em Andamento</p>
            <p>Concluído</p>
            <p>Gráfico</p>
        </StyledMenu>

    )



}
export default Menu;