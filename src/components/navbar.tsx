import "./../styles/navbar.scss";

const NavBar = () => {

  return (
    <nav className="nav" id="#nav">
      <div className="nav-container">
        <a
          href="https://cameroon-portfolios.vercel.app/"
          className="nav-container-logo"
        >
          <img src="assets/images/logo.svg" alt="logo" />
        </a>
        <div className="nav-container-menu">
          <a
            href="https://github.com/ln-dev7/cameroon-portfolios/blob/master/CONTRIBUTING.md"
            className="nav-container-menu-link"
          >
            <span>Add your portfolio</span>
            <span> + </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
