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

  const [articleBody, setArticleBody] = useState('');
	const [articleSubject, setArticleSubject] = useState('');

  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <div className="Authentication">Auth me up</div>
      <div className="Text-Editor">
        <MyEditor 
          articleBody={articleBody} 
          articleSubject={articleSubject} 
          setArticleBody={setArticleBody}
          setArticleSubject={setArticleSubject}
        />
      </div>
      <button onClick={() => postFunctions.createNewArticle(
          articleSubject,
          articleBody,
          "ENGINEER",
          1
      )}>
        Button
      </button>
      My Editor above
    </div>
  );
}

export default App;
