function Navbar() {


  return (
    <div className="navbar sticky">

      <div className="nav-link"> 
        <a href="#home"><div className="page-link">HOME</div></a>
        <a href="#about"><div className="page-link">ABOUT</div></a>
        <a href="#skills"><div className="page-link">SKILLS</div></a>
        <a href="#projects"><div className="page-link">PROJECTS</div></a>
        <a href="#contact"><div className="page-link">CONTACT</div></a>
      </div>
      <div  className="burger" onclick="Menu()"> 
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div> 
    </div>
  );
}

export default Navbar;
