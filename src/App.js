// import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      <h1>Learn React with Redux</h1>
      <Addtodo/>
      <Todo/>
    </div>
  );
}

export default App;
