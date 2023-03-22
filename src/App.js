import logo from './logo.svg';
import './App.css';
import MyEditor from './components/MyEditor/MyEditor';
import postFunctions from './rest/post';
import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';

const handleNewArticleSubmission = () => {
  postFunctions.createNewArticle("TEST SUBJECT", "TEST BODY AGAIN", "MARKETING", false);
}

function App() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <div className="App">
      <div className="Text-Editor">
        <MyEditor editorState={editorState} onChange={setEditorState}/>
      </div>
      <button onClick={handleNewArticleSubmission}>Button</button>
      My Editor above
    </div>
  );
}

export default App;
