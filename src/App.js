import logo from './logo.svg';
import './App.css';
import MyEditor from './components/MyEditor/MyEditor';
import Article from './components/Article/Article';
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
  
  const [selectedArticleForComments, setSelectedArticleForComments] = useState(1);
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

  const handleArticleClick = async (articleID) => {
    console.log(articleID);
    setSelectedArticleForComments(articleID);
    setComments(await getFunctions.getCommentsByArticleID(articleID));
  }

  const handleEditorKeyPress = (event) => {
    if (event.key == 'Tab') {
      event.preventDefault();
      event.target.value += "    ";
    }
  }

  return (
    <div className="App">
      <div className="Split ArticleSection">
        
        <Authentication selectedDepartment={selectedDepartment} setSelectedDepartment={handleDepartmentChange}/>
        
        <div className="FetchArticles">
          <button onClick={getArticlesForSelectedDepartment}>
            GET ARTICLES
          </button>
        </div>

        <div className="Text-Editor">
          <MyEditor 
            articleBody={articleBody} 
            articleSubject={articleSubject} 
            setArticleBody={setArticleBody}
            setArticleSubject={setArticleSubject}
            handleTabKeyPress={handleEditorKeyPress}
          />
        </div>

        <div className="Department-Selection">
          <input type="radio" value="ENGINEERING" name="department" onChange={handleArticleTypeChange}/> Engineering
          <input type="radio" value="MARKETING" name="department" onChange={handleArticleTypeChange}/> Marketing
          <input type="radio" value="SALES" name="department" onChange={handleArticleTypeChange}/> Sales
          <input type="radio" value="Data Science" name="department" onChange={handleArticleTypeChange}/> Data Science

          <br />

          <button onClick={() => postFunctions.createNewArticle(
            articleSubject,
            articleBody,
            articleType,
            "F"
          )}>
            POST NEW ARTICLE
          </button>
        </div>

        <div className="Articles">
          {articleList.map((article) => {
            return (
              <Article
                key={article.articleID}
                articleID={article.articleID}
                articleSubject={article.articleSubject}
                articleBody={article.articleBody}
                handleDeletion={() => console.log("delete")}
                handleRead={() => console.log("read")}
                handleUnread={() => console.log("unread")}
                handleArticleClick={handleArticleClick}
              />
            );
          })}
        </div>
      </div>
      <div className="Split CommentSection">
        Comments
        <br />
        {comments.map((comment) => {
          return (
            comment.commentBody
          );
        })}
      </div>
    </div>
  );
}

export default App;
