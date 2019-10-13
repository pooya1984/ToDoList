import React from 'react'


function DoneItem (props){
    
    let userDone;
    let userDate;
    let today = new Date();

    if(props.item.completed){
      userDone=(
         <li>{props.item.text}</li>
      )
      userDate=(
        <div>{today.toDateString()}</div>
      )
    }

    const dateStyle = {
        fontSize: '10px',
        color:'gray',
        textAlign:'center'
    }

    
    
    return (
        <div className="done-item">
            {userDone}
            <div style={props.item.completed ? dateStyle:null}>{userDate}</div>
        </div>
    )
}

export { DoneItem }