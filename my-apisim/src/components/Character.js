import styled from "styled-components";

export default function Character(props) {

    const {dataCharacter}=props
    const {character,image,quote }=dataCharacter;
 //   console.log(dataCharacter);
    return (
    
    <ContentCharacter>
        <Title>
            {character}
        </Title>
       

        <ContainerImage>
            <Image src={image}  alt={character}/>
        </ContainerImage>

        <StylePhase>
            {quote}
        </StylePhase>
        
         
    </ContentCharacter>

           
        )
    
};

const ContentCharacter=styled.div`
   display:table-cell;
    margin:5%;
    padding: 20px;
    border:1px solid #2a9d8f;
    border-radius:20px;
    width: 300px;
    align-items: center;
    text-align:center;
    margin:10px;
    &:hover{
        filter:brightness(40%)
}`;

const Title= styled.h2`
color:#264653;
height:40px;
justify-content: center;
align-items:center ;
display: flex;
`


const ContainerImage=styled.div`
padding: 15px;
height:250px;
display:flex;
align-items:center;
justify-content:center;
`

const Image= styled.img`

width:130px;
height : auto;
margin-right :20px;

`

const StylePhase=styled.div`
color:blue;
text-align
`;