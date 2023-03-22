import logo from './logo.svg';
import './App.css';
import MyEditor from './components/MyEditor/MyEditor';

function App() {
  return (
    <div className="App">
      <div className="Text-Editor">
        <MyEditor />
      </div>
      My Editor above
    </div>
  );
}

export default App;
