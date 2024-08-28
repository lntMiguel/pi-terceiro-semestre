import { StyledLeftContainer } from "./estilos/StyledLeftContainer.style";
import { StyledRightContainer } from "./estilos/StyledRightContainer.style";
import { useState } from "react";

function Tarefas() {
  const [listaNaoIniciada, setListaNaoIniciada] = useState([]);
  const [listaEmAndamento, setListaEmAndamento] = useState([]);
  const [listaConcluida, setListaConcluida] = useState([]);
  const [tarefa, setTarefa] = useState("");
  const [status, setStatus] = useState("Não Iniciada");

  const addTarefa = () => {
    if (!tarefa) return; // Não adiciona tarefa se estiver vazia

    const novaTarefa = { titulo: tarefa, id: Date.now(), status: status }; // Cria uma nova tarefa com um id único
    console.log(novaTarefa)
    switch (status) {
      case "Não Iniciada":
        setListaNaoIniciada([...listaNaoIniciada, novaTarefa]);
        break;
      case "Em Andamento":
        setListaEmAndamento([...listaEmAndamento, novaTarefa]);
        break;
      case "Concluída":
        setListaConcluida([...listaConcluida, novaTarefa]);
        break;
      default:
        break;
    }

    setTarefa(""); // Limpa o campo de tarefa
    setStatus("Não Iniciada"); // Reseta o status para o padrão
  };

  const removerTarefa = ({tarefa}) => {
    switch (tarefa.status) {
        case "Não Iniciada":
            setListaNaoIniciada([listaNaoIniciada.splice(tarefa.id, 1)])
          break;
        case "Em Andamento":
            setListaEmAndamento([listaEmAndamento.splice(tarefa.id, 1)])
          break;
        case "Concluída":
            setListaConcluida([listaConcluida.splice(tarefa.id, 1)])
          break;
        default:
          break;
      }
  }

  return (
    <>
      <StyledLeftContainer>
        <h3>Tarefas Não Iniciadas</h3>

        <ul>
          {listaNaoIniciada.map((tarefa) => (
            <div key={tarefa.id}>
                <li >{tarefa.titulo}</li>
                <form id="remover">
                    <button form="remover" type="button" onClick={removerTarefa({tarefa})}>
                    Adicionar!
                </button>
                </form>
            </div>
          ))}
        </ul>

        <h3>Tarefas em Andamento</h3>

        <ul>
          {listaEmAndamento.map((tarefa) => (
            <li key={tarefa.id}>{tarefa.titulo}</li>
          ))}
        </ul>

        <h3>Tarefas Concluidas</h3>

        <ul>
          {listaConcluida.map((tarefa) => (
            <li key={tarefa.id}>{tarefa.titulo}</li>
          ))}
        </ul>
      </StyledLeftContainer>

      <StyledRightContainer>
        <h2>Adicionar Tarefa</h2>
        <form>
          <div>
            <label htmlFor="tarefa">Tarefa:</label>
            <input
              type="text"
              name="tarefa"
              id="tarefa"
              required
              value={tarefa}
              onChange={(e) => setTarefa(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="status">Status:</label>
            <select
              name="status"
              id="status"
              value={status}
              required
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Não Iniciada">Não Iniciada</option>
              <option value="Em Andamento">Em Andamento</option>
            </select>
          </div>

          <div className="divBotao">
            <button onClick={addTarefa} className="botao">
              Adicionar!
            </button>
          </div>
        </form>
      </StyledRightContainer>
    </>
  );
}

export default Tarefas;
