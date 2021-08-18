import React from 'react';

class FooterIcon extends React.Component {

    render() {
    return (
      <div class="footer-menu">
        <img class="footer-icon" src={this.props.ImageUri} alt="" />
        <div>{this.props.Name}</div>
      </div>
    );
  }
}

export default FooterIcon;