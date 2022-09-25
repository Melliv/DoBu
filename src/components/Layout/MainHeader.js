import { Link } from "react-router-dom";
import styles from "./MainHeader.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function MainHeader() {
  return (
    <div className={styles.header}>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <h1>DoBu</h1>
            </Link>
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
