import { useState } from 'react';

import './App.css';
import CharacterContainer from './components/CharacterContainer';
import Container from './components/Container';
import Header from './components/Header';
import Welcome from './components/Welcome';




function App() {


const[characters,SetCharacters]=useState(null)

const reqApi= async()=>{

  const api=await fetch(
    "https://simpsons-quotes-api.herokuapp.com/quotes?count=3"
  );
  const frases= await api.json();
  SetCharacters(frases);
  console.log(frases)


}

  return (
    
    <Container>
      <Header/>

      {!characters ?(
              <Welcome   reqApi={reqApi}/>
       ) :(
              <CharacterContainer  characters= {characters}   reqApi={reqApi}   />
                
    
     
       )
      }
   

       
    </Container>
  );
}






export default App;
