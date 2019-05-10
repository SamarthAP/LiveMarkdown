import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import marked from 'marked';

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.rawMarkup = this.rawMarkup.bind(this);
  }

  rawMarkup() {
    let rawMarkup = marked(this.props.text, {sanitize: true});  
    return {__html: rawMarkup};
  }

  render() {
    return (
      <div className='output size' dangerouslySetInnerHTML={this.rawMarkup()}>
    </div>
    )
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  render() {
    return (
      <div>
        <textarea className='input size' 
        value={this.state.value} 
        onChange={this.handleChange}
        placeholder='Input text here'/>
        <Output text={this.state.text} />
        <div className='footer'>
          <p>
            Live Markdown Editor
          </p>
        </div>
      </div>

    )
  }
}

ReactDOM.render(
  <Editor />,
  document.getElementById('root')
)
