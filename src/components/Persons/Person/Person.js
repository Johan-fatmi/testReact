import React from 'react';


const person = (props) =>{

   const  stylePerson = {
       boxShadow: '0 5px 10px  black',
       padding:'20px',
       width: '600px',
       margin: '0 auto',
       marginBottom: '10px'
   }
    return (
        <div style={stylePerson}>
            <h2 onClick={props.click}>my name is {props.name} and age { props.age}</h2>
            <input type="text" onChange = {props.change} />
        </div>
    )
}
export default person