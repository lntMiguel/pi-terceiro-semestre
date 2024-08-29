import { Chart } from "react-google-charts";

function Grafico({ listaNaoIniciada, listaEmAndamento, listaConcluida }) {
  const dados = [
    ["Tarefas", "Quantidade"],
    ["Não Iniciadas", listaNaoIniciada.length],
    ["Em Andamento", listaEmAndamento.length],
    ["Concluída", listaConcluida.length],
  ];

  const opcoes = {
    title: "Porcentagem de Tarefas",
    backgroundColor: "#f2f2f2",
  };

  return (
    <Chart
      chartType="PieChart"
      data={dados}
      options={opcoes}
      width={"100%"}
      height={"200px"}
    />
  );
}

export default Grafico;
