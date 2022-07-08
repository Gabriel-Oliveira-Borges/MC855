import React from "react"
import ReactQuill from 'react-quill';
import "./TextEditor.css";

class TextEditor extends React.Component {
  render() {
    return (
        <div className="TextEditor">
          <ReactQuill defaultValue={this.props.text}
                      onChange={this.props.onChangeFn} />
        </div>
    )
  }
}

export default TextEditor;