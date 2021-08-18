import React from 'react';

// CSS
import '../footer-icon/footer-icon.scss';

// JS
import FooterIcon from '../footer-icon/footer-icon.js';


class Footer extends React.Component {

    render() {

      const footer = [
        { ImageUri:`${process.env.PUBLIC_URL}/footer/h1.png`, Name:"ヘルスケア" },
        { ImageUri:`${process.env.PUBLIC_URL}/footer/u2.png`, Name:"運動" },
        { ImageUri:`${process.env.PUBLIC_URL}/footer/t2.png`, Name:"デバイス" },
        { ImageUri:`${process.env.PUBLIC_URL}/footer/j2.png`, Name:"自分" },
      ];

      var data = footer.map((item) => {
        return (
        <FooterIcon ImageUri={item.ImageUri} Name={item.Name}/>)  
      })

      return (
        <div class="footer-wrapper">
          <div class="footer">
            {data}
          </div>
        </div>
      );
  }
}

export default Footer;