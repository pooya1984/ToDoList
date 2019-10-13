import React from 'react';


function TodoItem(props) {
    
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    const dateStyle = {
        position:'relative',
        display:'flex',
        fontSize: '15px',
        color:'gray',
        textAlign:'center',
        top:'-25px',
        left:'90px'
    }

    var today = new Date();
    
    return (
        <div >
            <div className="todo-item">
            <input 
                className='checkbox'
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.onChange(props.item.id)}/>
             <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p> 
             {/* TODO: make delete button (!change icon to button icon!) */}
             {/* <button className='glyphicon glyphicon-remove-sign'
               onClick={()=>props.removeItem(props.item)}></button> */}
            </div>
            <p style={dateStyle}>{today.toDateString()}</p>
        </div>
    )
}

export { TodoItem }
