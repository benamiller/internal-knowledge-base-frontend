import logo from './logo.svg';
import './App.css';
import MyEditor from './components/MyEditor/MyEditor';
import postFunctions from './rest/post';
import getFunctions from './rest/get';
import { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import Authentication from './components/Authentication/Authentication';

function App() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  const [articleBody, setArticleBody] = useState('');
	const [articleSubject, setArticleSubject] = useState('');

  const [articleList, setArticleList] = useState([]);
  
  const [comments, setComments] = useState([]);

  const [selectedDepartment, setSelectedDepartment] = useState('ENGINEERING');

  const [articleType, setArticleType] = useState(selectedDepartment);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  }

  const handleArticleTypeChange = (event) => {
    setArticleType(event.target.value);
  }

  const getArticlesForSelectedDepartment = async () => {
    setArticleList(await getFunctions.getArticlesByDepartment(selectedDepartment));
  }

  const handleArticleClick = (articleID) => {
    console.log(articleID);
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


      <button onClick={getArticlesForSelectedDepartment}>
        GET ARTICLES
      </button>


      <br />
      <input type="radio" value="ENGINEERING" name="department" onChange={handleArticleTypeChange}/> Engineering
      <input type="radio" value="MARKETING" name="department" onChange={handleArticleTypeChange}/> Marketing
      <br />

      <button onClick={() => postFunctions.createNewArticle(
          articleSubject,
          articleBody,
          articleType,
          "F"
      )}>
        POST NEW ARTICLE
      </button>

      <div className="Articles">
        {articleList.map(a => <li key={a.articleID} onClick={() => handleArticleClick(a.articleID)}>{a.articleBody}</li>)}
      </div>
    </div>
  );
}

export default App;
