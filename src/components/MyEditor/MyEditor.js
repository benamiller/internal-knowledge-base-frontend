import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './MyEditor.css';

class MyEditor extends React.Component {
    constructor(props) {
      super(props);
			this.editorState = props.editorState;
			this.setEditorState = props.setEditorState;
      this.state = {editorState: props.editorState};
			this.onChange = props.onChange;
      this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }
  
    handleKeyCommand(command, editorState) {
      const newState = RichUtils.handleKeyCommand(editorState, command);
  
      if (newState) {
        this.onChange(newState);
        return 'handled';
      }
  
      return 'not-handled';
    }

		_onBoldClick() {
			this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
			console.log(this.state.editorState.getCurrentContent().getPlainText('\u0001'));
		}
  
    render() {
      return (
        <>
					<Editor
							editorState={this.editorState}
							handleKeyCommand={this.handleKeyCommand}
							onChange={this.onChange}
					/>
        </>
      );
    }
  }
  
  export default MyEditor;