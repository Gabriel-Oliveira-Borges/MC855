import React from "react"
import ReactQuill from 'react-quill';
import Translations from "../../constants/translations";
import "./TextEditor.css";

class TextEditor extends React.Component {
  render() {
    return (
        <div className="TextEditor">
          {Translations[this.props.pageId]}
          <ReactQuill defaultValue={this.props.text}
                      onChange={value => this.props.onChangeFn(this.props.pageId, value)} />
        </div>
    )
  }
}

export default TextEditor;