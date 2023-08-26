import './App.css';
import NavBar from './components/NavBar';
import {useState} from "react";
import Footer from './components/Footer';
import Recommendations from './components/Recommendations';

function App() {
 const [searchCriteria, setSearchCriteria] = useState("");
 function search(criteria){
  setSearchCriteria(criteria);
 }
 return(
  <div className="flex flex-col min-h-screen">
  <NavBar search={search}/>

  <main className="flex-grow">
    <Recommendations/>
  </main>

  <Footer />
</div>
 )
}

export default App;
