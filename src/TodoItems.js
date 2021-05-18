import React from "react";
 
class TodoItems extends React.Component {
  renderTaskItem(item) {  //use more direct function names e.g. change from createTasks to renderTaskItem...
    return <li key={item.key}>{item.text}</li>
  }

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.renderTaskItem).reverse(); //read abt map(), filter(), reduce()
    
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;