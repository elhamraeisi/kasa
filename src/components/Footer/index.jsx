import logo from "../../assets/images/logo-black.png";
import "./Footer.css"

function Footer() {
  return (
    <footer className="Footer">
      <img src={logo} className="App-logo-black" alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer;
