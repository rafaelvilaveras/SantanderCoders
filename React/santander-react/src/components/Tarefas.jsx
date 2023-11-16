import { useEffect, useState } from "react"

export default function Tarefas() {

  const [tarefas, setTarefas] = useState(
    [
      {id: '1', title: 'Tarefa 1'},
      {id: '2', title: 'Tarefa 2'},
      {id: '3', title: 'Tarefa 3'},
      {id: '4', title: 'Tarefa 4'},
    ]
  ) 

  useEffect(() => {

    async function buscarDados() {
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos');
      const resultadoFinal = await resultado.json();
      return resultadoFinal;

    }

    buscarDados().then(res => setTarefas(res));
  },[])


  return(
    <>
      <h2>Buscando dados</h2>
      <ol>
        {tarefas.map((item) => {
          return <li key={item.id}>{item.title} - {item.completed && 'Tarefa Concluída'}</li>
        })}
      </ol>
    </>
  );

}
