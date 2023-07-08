import React, { Component } from 'react';

class ImageComponent extends Component {
  render() {
    const { src, alt, className, style } = this.props;
    return <img src={src} alt={alt} className={className} style={style} />;
  }
}

export default ImageComponent;
