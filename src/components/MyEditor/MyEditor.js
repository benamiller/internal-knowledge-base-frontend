import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './MyEditor.css';

const MyEditor = (props) => {

	return (
		<textarea placeholder='Article body'></textarea>
	)
}

export default MyEditor;