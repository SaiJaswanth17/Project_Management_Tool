import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-hot-toast";
import './Navbar.css';

function AppNavbar({ user, setUser }) {
  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout', {}, { withCredentials: true });
      setUser(null);
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Failed to logout');
      console.error('Logout error:', error);
    }
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/tasks">
              Tasks
            </Nav.Link>
          </Nav>

          <Nav>
            {user ? (
              <div className="d-flex align-items-center">
                <span className="navbar-text me-3">Welcome, {user.name}</span>
                <Button variant="outline-danger" onClick={handleLogout} className="px-4">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <Button variant="outline-primary" as={Link} to="/login" className="me-3 px-4">
                  Login
                </Button>
                <Button variant="primary" as={Link} to="/signup" className="px-4">
                  Signup
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
