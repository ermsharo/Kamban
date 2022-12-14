import styled from 'styled-components';
import { HiPlusCircle } from "react-icons/hi";
import { useState } from "react";


const CardBox = styled.div`
  position: relative;
  margin: 40px auto;
  width: 100%;
  height: auto;
  min-height: 200px;
  background: #feff9c;
  border-radius: 2px;

  &:before{
    content: '';
  position: absolute;
  bottom: 10px;
  width: 40%;
  height: 10px;
  box-shadow: 0 5px 14px rgba(0,0,0,.7);
  z-index: -1;
  transition: all .3s ease-in-out;
  left: 15px;
  transform: skew(-5deg) rotate(-5deg);
  }
  &:after {
    content: '';
  position: absolute;
    left: 5px;
  }
  &:hover:after{
    box-shadow: 0 2px 14px rgba(0,0,0,.4);
    right: 5px;
  }
`;


const CardHeader = styled.div`
padding: 5% 10%;
display: flex ;
justify-content: center;
margin-top: 32px;
`;



const CardText = styled.div`
font-family: 'Roza', sans-serif;
font-size: 24px;
text-align: justify;
padding: 10%;


`;

const CardOptions = styled.div`
display: flex ;
justify-content: center;
font-size: 24px;
padding: 5% 10%;


`;

const CardIcons = styled.div`
font-size: 24px;
cursor: pointer;

`;

const NewTextArea = styled.textarea`
width: 90%;
max-width: 90%;
margin: auto;

font-family: 'Roza', sans-serif;
font-size: 24px;
background: #feff9c;
resize: none;
border-color: black;
border-bottom-left-radius: 100% 2%;
    border-bottom-right-radius: 2% 100%;
    border-top-left-radius: 2% 100%;
    border-top-right-radius: 100% 2%;
  border-style: dashed;
  word-wrap: break-word;
  padding: 8px; 

`;

const NewTitleArea = styled.input`
width: 80%;


font-family: 'Roza', sans-serif;

background: #feff9c;
border-color: black;
border-bottom-left-radius: 100% 2%;
    border-bottom-right-radius: 2% 100%;
    border-top-left-radius: 2% 100%;
    border-top-right-radius: 100% 2%;
  border-style: dashed;
  word-wrap: break-word;
  justify-content: center;
font-size: 28px;
font-weight: 500;
padding: 8px;

`;


export default function NewCard({createNewCard}) {

  const [newTextTitle, setNewTextTitle] = useState("");
  const [newTextBody, setNewTextBody] = useState("");

  return (
    <CardBox>
      <CardHeader><NewTitleArea placeholder='Titulo'

        onChange={evt => setNewTextTitle(evt.target.value)}
        value={newTextTitle}></NewTitleArea>

      </CardHeader>

      <CardText><NewTextArea id="story" name="story"
        rows="5" cols="33"
        onChange={evt => setNewTextBody(evt.target.value)}
        value={newTextBody}
        placeholder = "Coloque seu texto aqui"
      >

      </NewTextArea></CardText>

      <CardOptions>
        <CardIcons><HiPlusCircle onClick = {
          ()=>{
            createNewCard(newTextTitle, newTextBody)
          }
        }/></CardIcons>

      </CardOptions>
    </CardBox>
  );
}