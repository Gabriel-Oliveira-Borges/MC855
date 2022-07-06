import React from "react"
import ReactQuill from 'react-quill';

class TextEditor extends React.Component {
    constructor(props) {
      super(props)
    }
   
    render() {
      return (
          <div>
            <ReactQuill value={this.props.text}
                        onChange={this.props.onChangeFn} />
          </div>
      )
    }
  }

export default TextEditor;