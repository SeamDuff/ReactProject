import './styles.css';

import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <div className="topFooter">
        <div className="topFooterChildContainer">
          <button>
            <Link to="/">
              <img
                src="/logo-sevuchitas.png"
                alt="logo-sevuchitas"
                width={200}
              />
            </Link>
          </button>
        </div>
        <div className="topFooterChildContainer">
          <h2>Encontranos en:</h2>
          <div className="socialMedia">
            <a
              href="https://wa.me/+5491154553704"
              target="_blank"
              rel="noreferrer">
              Whatsapp
            </a>
            <a
              href="https://www.instagram.com/seanduff1/"
              target="_blank"
              rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <div>
          <small>{year} Sevuchitas</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
