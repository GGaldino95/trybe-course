import './App.css';


const task = (value) => {
  const taskArray = ['Wake up', 'Get up', 'Brush teeth', 'CODE!'];
  value = taskArray.map(currentTask => (<li>{currentTask}</li>));
  return value;
}

function App() {
  return (
    <div>
      <h1>Daily tasks:</h1>
      {task()}
      <p>#VQV</p>
    </div>
  );
}

export default App;
