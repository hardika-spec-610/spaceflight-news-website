
import './App.css';
import { Container } from 'react-bootstrap';
import Homepage from './Component/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './Component/NavbarComponent';

function App() {
  return (
    <div>
      <Container>
        <NavbarComponent />
        <Homepage />
      </Container>
    </div>
  );
}

export default App;
