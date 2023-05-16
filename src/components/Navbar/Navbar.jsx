import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">FLOW</div>
      <ul className="menu">
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Pricing">Pricing</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="Clients">Clients</a>
        </li>
        <li>
          <a href="Clients">
            <button className="nav-button">Contact Us</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
