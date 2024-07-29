
import './App.css';
import AddContact from './components/AddContact';
import Header from './components/Header'
import ContactList from './components/ContactList';

function App() {
  const contacts =[
    {
    id: "1",
    name: "Dipesh",
    email: "kunal@gmail"
    },
    {
      id: "2",
    name: "Dipesh2",
    email: "kunal2@gmail"
    },
    {
    id: "33",
    name: "Dipesh",
    email: "kunal3@gmail"
    }
  ]
  return (
    <>
    <Header/>
    <AddContact/>
    <ContactList contacts ={contacts}/>
    </>
  );
}

export default App;
