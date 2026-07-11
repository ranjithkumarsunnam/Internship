import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from'./Components/Form';
import Button from "./Components/Button";
import Card from "./Components/Card";
function App(){
  return(
    <div>
      <Header/>
      <Form/>

      <Button text="Login"/><br></br>
      <Button text="Register"/><br></br>
      <Button text="Submit"/>

      <Card name="Ranjith Kumar" age={20}/>
      

      <Footer/>
      
    </div>
  )
}
export default App;