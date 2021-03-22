import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByText, getByLabelText, getByRole } = render(<App />) // Caso precise de uma nova query adicione no object destructuring

    const newTask = getByLabelText('Tarefa:');
    const addTaskButton = getByRole('button', { name: 'Adicionar' });

    listTodo.forEach((currentTask) => {
      fireEvent.change(newTask, { target: { value: currentTask }});
      fireEvent.click(addTaskButton);

      expect(getByText(currentTask)).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item content="Testando uma props" />);

    expect(getByText('Testando uma props')).toBeInTheDocument();
  })
})
