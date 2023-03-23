import logo from './logo.svg';
import './App.css';
import MyEditor from './components/MyEditor/MyEditor';
import postFunctions from './rest/post';
import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import Authentication from './components/Authentication/Authentication';

function App() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const [articleBody, setArticleBody] = useState('');
	const [articleSubject, setArticleSubject] = useState('');

  const [articles, setArticles] = useState([]);
  
  const [comments, setComments] = useState([]);

  const [selectedDepartment, setSelectedDepartment] = useState('ENGINEERING');

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  }

  const handleEditorKeyPress = (event) => {
    if (event.key == 'Tab') {
      event.preventDefault();
      event.target.value += "    ";
    }
  }

  return (
    <div className="App">
      <Authentication selectedDepartment={selectedDepartment} setSelectedDepartment={handleDepartmentChange}/>
      <div className="Text-Editor">
        <MyEditor 
          articleBody={articleBody} 
          articleSubject={articleSubject} 
          setArticleBody={setArticleBody}
          setArticleSubject={setArticleSubject}
          handleTabKeyPress={handleEditorKeyPress}
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
