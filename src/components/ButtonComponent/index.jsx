import React, { Component } from 'react';

class ButtonComponent extends Component {
  render() {
    const { text, onClick, className, style } = this.props;
    return (
      <button onClick={onClick} className={className} style={style}>
        {text}
      </button>
    );
  }
}

export default ButtonComponent;
