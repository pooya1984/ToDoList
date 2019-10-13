import React, { Component } from 'react';
import './App.css';
import {TodoItem,DoneItem} from './components/index';
import todosData from './todoData'

class App extends Component {

  state={
    item:todosData,
    userTask:''
  }


  onChange=event=>{
      this.setState(prevState=>{
        const updateItem = prevState.item.map(todo=>{
          if(todo.id === event){
               todo.completed = !todo.completed
           }
          return todo
        })

        return{  item:updateItem }
      })
    console.log('changed',event)
  
  }

  handleChange = event => {
   this.setState({
    userTask:event.target.value,
    })
    
   console.log(this.state.text)
  }

  removeItem = event => {
    const remove = this.state.item
    const index = remove.indexOf (event.target.value)
    remove.splice(index,1)
        this.setState({
    item:remove
    })
  }

  handleSubmit = event => {
   event.preventDefault();
   const nextID = this.state.item.length + 1
   const newTask = {id: nextID, text: this.state.userTask, completed: false}
   this.setState({
   item:[...this.state.item, newTask]},()=> 
   this.setState({userTask: ''}))  

   console.log(this.state.item)
  }

  
  render() {
    return (
      <div className="todo-list">
       <form >
         <input type='text'
               className='search'
               placeholder="what's your Plan?" 
               autofocus="true"
               value={this.state.userTask}
               onChange={this.handleChange}
               required/>
         <button className='bTn' onClick={this.handleSubmit}>click</button>
       </form>
       <p className='doList'>TODOS LIST
          <button className='glyphicon glyphicon-remove-sign'
                  onClick={this.removeItem.bind(this.item)}>
          </button>
       </p>
       {this.state.item.map((q,i)=>
       <TodoItem key={i} item={q} onChange={this.onChange}/>
       )}
      

       <p className='doneList'>DONE LIST</p>
       {this.state.item.map((q,i)=>
       <DoneItem key={i} item={q}/>
       )} 
       
     
      </div>
    );
  }
}

export default App;
