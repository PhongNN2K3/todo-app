import Container from "react-bootstrap/Container";
import "./App.scss";
import Header from "./components/Header";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="container">
      <Header />
      <Container>
        <UserTable />
      </Container>
    </div>
  );
}

export default App;
