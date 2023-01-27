import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList';
import './App.css';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import WelcomeView from './components/WelcomeView';


function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <Navbar />
      {!user ? <WelcomeView /> : <ToDoList /> /* if else statement decides whether to show login/welcome view or current to do list*/}
      <Footer />

    </div>
  );
}

export default App;
