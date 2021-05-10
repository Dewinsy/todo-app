import React from 'react'
import TodoItems from './TodoItems'
import './TodoList.css'

class TodoList extends React.Component {
    constructor(){
        super() //why use this?
        
        this.state = {
            items:[]
        }

        this.addItem = this.addItem.bind(this)
    }

    addItem(e){
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()   //read more abt keys
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
           
            this._inputElement.value = "";
          }
           
          //console.log(this.state.items);
             
          e.preventDefault();
    }

    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} 
                            placeholder="enter task">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        )
    }

}

export default TodoList

