import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const footerStyle = {
      textAlign: 'center',
      fontColor: 'green',
      fontSize: '15px',
      paddingBottom: '0px'
    }
    return (
        <div className="navbar navbar-fixed-bottom">
        <hr />
            <div style={footerStyle}>Made with &#9825; by Raj</div>
        </div>
    );
  }
}

export default Footer;
