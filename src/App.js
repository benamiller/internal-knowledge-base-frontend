import logo from './logo.svg';
import './App.css';
import MyEditor from './components/MyEditor/MyEditor';
import postFunctions from './rest/post';

function App() {
  return (
    <div className="App">
      <div className="Text-Editor">
        <MyEditor />
      </div>
      <button onClick={postFunctions.createNewComment}>Button</button>
      My Editor above
    </div>
  );
}

export default App;
