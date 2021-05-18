import React from 'react'
import TodoItems from './TodoItems'
import './TodoList.css'

class TodoList extends React.Component {
    constructor(){
        super() //goes to the parent class(super class) and grabs goodies to the App component e.g setState()
        
        this.state = {
            items:[]
        }

        this.addItem = this.addItem.bind(this)
    }
  
    addItem(e){
      
        if (this._inputElement.value !== "") {
            let newItem = {
              text: this._inputElement.value,
              key: Date.now() //Keys help React identify which items have changed, are added, or are removed.
            };

            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newItem) 
              };
            });
            
            this._inputElement.value = "";
          }
           
          e.preventDefault();
    }
    
    componentDidMount() { 
        try {
            const deserialisedState = JSON.parse( window.localStorage.getItem("state"));
            //parse: to split (a file or other input) into pieces of data that can be easily manipulated or stored.
            this.setState({ ...deserialisedState });
        } catch (err) {}
        }
    componentDidUpdate() {
        const serialisedState = JSON.stringify(this.state); 
        window.localStorage.setItem("state", serialisedState);
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

