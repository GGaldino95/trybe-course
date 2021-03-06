import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const addTaskButton = getByText('Adicionar');
    expect(addTaskButton).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const { getByLabelText, queryByText } = render(<App />);
    const addTaskInput = getByLabelText('Tarefa:');
    const addTaskButton = queryByText('Adicionar');

    fireEvent.change(addTaskInput, { target: { value: 'Tomar agua' } } ); // event.target.value = 'Tomar agua'
    expect(queryByText('Tomar agua')).not.toBeInTheDocument();
    fireEvent.click(addTaskButton);
    expect(queryByText('Tomar agua')).toBeInTheDocument();
  });
});