import './App.css';
import defaultValue from './Component/DefaultValue'
import React, { Component } from 'react';

const marked = require('marked')
marked.setOptions({
  breaks: true
});
class App extends Component {
  state = {
    markdown: defaultValue
  }

  updateMarkdown = (markdown) => {
    this.setState({markdown})
  }
  
  render() {
    const {markdown} = this.state
    return(
      <React.Fragment>
        <div id="wrapper">
          <div className="editor-wrapper"> 
            <div className="toolbar"> 
              <h2>Editor</h2>
            </div>
            <textarea 
              id="editor"
              placeholder="Enter Markdown" 
              value={markdown}
              onChange={(event) => this.updateMarkdown(event.target.value)}
            />
          </div>
          <div className="preview-wrapper">
            <h2 className="previewer">Previewer</h2>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown)}}>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App