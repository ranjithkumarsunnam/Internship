/* import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from'./Components/Form';
import Button from "./Components/Button";
import Card from "./Components/Card"; */
import Student from "./Components/Student";
import './App.css';
function App(){
  return(
    <div className="Container">
      <Student name="Ranjith" course="ReactJs" college="GuruNanak"/>
      <Student name="Akash" course="NodeJs" college="MallaReddy"/> 
      <Student name="Mahesh" course="DataBase" college="OU"/>
    </div>
  )
}
export default App;