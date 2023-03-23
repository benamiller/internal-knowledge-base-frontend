import logo from './logo.svg';
import './App.css';
import MyEditor from './components/MyEditor/MyEditor';
import postFunctions from './rest/post';
import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

function App() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className="App">
      <div className="Authentication">Auth me up</div>
      <div className="Text-Editor">
        <MyEditor editorState={editorState} setEditorState={setEditorState}/>
      </div>
      <button onClick={() => postFunctions.createNewArticle(
          "SUBJECT",
          editorState.getCurrentContent().getPlainText('\u0001'),
          "ENGINEER",
          false
      )}>
        Button
      </button>
      My Editor above
    </div>
  );
}

export default App;
