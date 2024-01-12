import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function MyNavBar() {
  return (
    <Navbar expand="lg" bg="info">
      <Container>
        <Navbar.Brand href="#">EpiMeteo</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
