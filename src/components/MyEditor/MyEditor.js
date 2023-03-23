import React, { useState } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './MyEditor.css';

const MyEditor = (props) => {
	const [articleBody, setArticleBody] = useState('');
	const [articleSubject, setArticleSubject] = useState('');

	const handleBodyChange = (event) => {
		setArticleBody(event.target.value);
	}

	const handleSubjectChange = (event) => {
		setArticleSubject(event.target.value);
	}

	return (
		<div className="Article-input">
			<textarea id="article-subject" placeholder='Article subject line' value={articleSubject} onChange={handleSubjectChange}></textarea>
			<textarea id="article-body" placeholder='Article body' value={articleBody} onChange={handleBodyChange} rows="10"></textarea>
			<button onClick={() => console.log(articleBody)}>Test button</button>
		</div>
	)
}

export default MyEditor;