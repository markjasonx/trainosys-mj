import logo from './logo.svg';
import './App.css';
import ClassBasedComponent from './Components/ClassBasedComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import NestedComponent from './Components/NestedComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassBasedComponent/>
        <FunctionalComponent/>
        <NestedComponent/>
      </header>
    </div>
  );
}

export default App;
