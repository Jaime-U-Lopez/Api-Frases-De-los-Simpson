import styled from "styled-components";
import Character from "./Character";
export default function CharacterContainer(props) {

    const{characters,reqApi}=props
    return(

    <>
        <ContainerCharacter>
         {characters.map((character,index)=> (
             
             <Character  dataCharacter={character} key = {index} />
             
             ))}

        </ContainerCharacter>
        <DivButon>

            <StyleButton     onClick={reqApi}> Recargar Personajes </StyleButton>  

        </DivButon>

    </>
    )
    
};

const ContainerCharacter=styled.div`
display:flex;
width: 100%;

`;

const DivButon =styled.div`
width: 100%;
text-align:center;
`


const StyleButton=styled.button`

width: 251px;
margin-top: 5%;
height:60px;
color: orange;
background-color:black;
border-radius: 15px;
font-size:25px;

&:hover{
    cursor:pointer;
    background-color:cornflowerblue;
    color:black
}
`