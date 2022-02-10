import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

const Boxes=()=>
{ 
  return( <>
     <Card name = "SVECW" descri = "Autonomous College" para="suggested to girls who wants to secure a good job"/>
     <Card name = "VIT" descri="Affilicated to JNTUK" para = "suggested to students who wants to secure a good job"/>
  </> );
}

ReactDOM.render(
  <div>
    <Boxes/>
    </div>,
    document.getElementById("root")
);