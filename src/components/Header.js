import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const headerStyle = {
      textAlign: 'center',
      fontColor: 'green',
      fontSize: '50px'
    }
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to="/"
            className="center-block brand-logo"
          >
            <div style={headerStyle}>BlogGit</div>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;
