var Nav=ReactBootstrap.Nav;
var Navbar=ReactBootstrap.Navbar;
var NavItem=ReactBootstrap.NavItem;
var NavDropdown=ReactBootstrap.NavDropdown;
var MenuItem=ReactBootstrap.MenuItem;
var navbarReact=(
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#">EIS</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href='#'>Home</NavItem>
      <NavItem eventKey={2} href='#'>Edit Profile</NavItem>
      <NavDropdown eventKey={3} id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} href='#'>View Tickets</MenuItem>
        <MenuItem eventKey={3.2} href='#'>New Tickets</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
ReactDOM.render(navbarReact, document.getElementById('nav'));
