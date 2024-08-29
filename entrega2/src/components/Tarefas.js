import { StyledLeftContainer } from "./estilos/StyledLeftContainer.style";
import { StyledRightContainer } from "./estilos/StyledRightContainer.style";

import { DivGrafico } from "./estilos/DivGrafico.style";

import { useState } from "react";
import Grafico from "./Grafico";

function Tarefas() {
  const [listaNaoIniciada, setListaNaoIniciada] = useState([]);
  const [listaEmAndamento, setListaEmAndamento] = useState([]);
  const [listaConcluida, setListaConcluida] = useState([]);
  const [tarefa, setTarefa] = useState("");
  const [status, setStatus] = useState("Não Iniciada");

  const addTarefa = (e) => {
    e.preventDefault();
    if (!tarefa) return; // Não adiciona tarefa se estiver vazia

    const novaTarefa = { titulo: tarefa, id: Date.now(), status: status }; // Cria uma nova tarefa com um id único
    console.log(novaTarefa);
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

  const removerTarefa = (id, status) => {
    switch (status) {
      case "Não Iniciada":
        setListaNaoIniciada(
          listaNaoIniciada.filter((tarefa) => tarefa.id !== id)
        );
        break;
      case "Em Andamento":
        setListaEmAndamento(
          listaEmAndamento.filter((tarefa) => tarefa.id !== id)
        );
        break;
      case "Concluída":
        setListaConcluida(listaConcluida.filter((tarefa) => tarefa.id !== id));
        break;
      default:
        break;
    }
  };

  const moveTarefa = (id, statusAtual, novoStatus) => {
    let tarefaParaMover;
    switch (statusAtual) {
      case "Não Iniciada":
        tarefaParaMover = listaNaoIniciada.find((tarefa) => tarefa.id === id);
        setListaNaoIniciada(
          listaNaoIniciada.filter((tarefa) => tarefa.id !== id)
        );
        break;
      case "Em Andamento":
        tarefaParaMover = listaEmAndamento.find((tarefa) => tarefa.id === id);
        setListaEmAndamento(
          listaEmAndamento.filter((tarefa) => tarefa.id !== id)
        );
        break;
      case "Concluída":
        tarefaParaMover = listaConcluida.find((tarefa) => tarefa.id === id);
        setListaConcluida(listaConcluida.filter((tarefa) => tarefa.id !== id));
        break;
      default:
        break;
    }
    console.log(tarefaParaMover);
    if (tarefaParaMover) {
      tarefaParaMover.status = novoStatus;
      switch (novoStatus) {
        case "Não Iniciada":
          setListaNaoIniciada([...listaNaoIniciada, tarefaParaMover]);
          break;
        case "Em Andamento":
          setListaEmAndamento([...listaEmAndamento, tarefaParaMover]);
          break;
        case "Concluída":
          setListaConcluida([...listaConcluida, tarefaParaMover]);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <StyledLeftContainer>
        <h2>Tarefas Não Iniciadas</h2>

        <ul id="aFazer">
          {listaNaoIniciada.map((tarefa) => (
            <div key={tarefa.id}>
              <li>
                {tarefa.titulo}

                <button
                  class="btnEmAndamento"
                  onClick={() =>
                    moveTarefa(tarefa.id, "Não Iniciada", "Em Andamento")
                  }
                >
                  Em Andamento
                </button>
                <button
                  class="btnConcluido"
                  onClick={() =>
                    moveTarefa(tarefa.id, "Não Iniciada", "Concluída")
                  }
                >
                  Concluída
                </button>

                <button
                  class="btnRemover"
                  type="button"
                  onClick={() => removerTarefa(tarefa.id, tarefa.status)}
                >
                  <i class="fa fa-trash"></i>
                </button>
              </li>
            </div>
          ))}
        </ul>

        <h2>Tarefas em Andamento</h2>

        <ul id="emAndamento">
          {listaEmAndamento.map((tarefa) => (
            <div key={tarefa.id}>
              <li>
                {tarefa.titulo}

                <button
                  class="btnNaoIni"
                  onClick={() =>
                    moveTarefa(tarefa.id, "Em Andamento", "Não Iniciada")
                  }
                >
                  Não Iniciada
                </button>
                <button
                  class="btnConcluido"
                  onClick={() =>
                    moveTarefa(tarefa.id, "Em Andamento", "Concluída")
                  }
                >
                  Concluída
                </button>

                <button
                  class="btnRemover"
                  type="button"
                  onClick={() => removerTarefa(tarefa.id, tarefa.status)}
                >
                  <i class="fa fa-trash"></i>
                </button>
              </li>
            </div>
          ))}
        </ul>

        <h2>Tarefas Concluidas</h2>

        <ul id="concluida">
          {listaConcluida.map((tarefa) => (
            <div key={tarefa.id}>
              <li>
                {tarefa.titulo}

                <button
                  class="btnNaoIni"
                  onClick={() =>
                    moveTarefa(tarefa.id, "Concluída", "Não Iniciada")
                  }
                >
                  Não Iniciada
                </button>
                <button
                  class="btnEmAndamento"
                  onClick={() =>
                    moveTarefa(tarefa.id, "Concluída", "Em Andamento")
                  }
                >
                  Em Andamento
                </button>
                <button
                  class="btnRemover"
                  type="button"
                  onClick={() => removerTarefa(tarefa.id, tarefa.status)}
                >
                  <i class="fa fa-trash" />
                </button>
              </li>
            </div>
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
      <DivGrafico>
        <Grafico
          listaNaoIniciada={listaNaoIniciada}
          listaEmAndamento={listaEmAndamento}
          listaConcluida={listaConcluida}
        />
      </DivGrafico>
    </>
  );
}

export default Tarefas;
