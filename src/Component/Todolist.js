import React, { Component } from "react";
import NewTodo from "./NewTodo";
import Eachitem from "./Eachitem";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  insertList = (newTodo) => {
    //console.log(newTodo);
    this.setState((previous) => ({ items: [...previous.items, newTodo] }));
  };

  clickItem = (id) => {
    var newStateItems=this.state.items.map((item)=>{
      if(id===item.id)
      {
        return {...item,active:!item.active};
      }
      return item;
    });

    this.setState({items:newStateItems});
  };

  deleteItem=(id)=>{
    this.setState({items:this.state.items.filter(t=>t.id!==id)});
  }

  editItem=(id,itemText)=>{
    var newStateItems=this.state.items.map((item)=>{
      if(id===item.id)
      {
        return {...item,todo:itemText};
      }
      return item;
    });
    this.setState({items:newStateItems});
  }

  render() {
    var items = this.state.items.map((item) => (
      <Eachitem key={item.id} id={item.id} item={item} click={this.clickItem} del={this.deleteItem} edit={this.editItem}/>
    ));

    return (
      <div style={{ backgroundColor: "Red", width: "400px", color: "white" }}>
        <p>Todo list!</p>
        {items}
        <NewTodo add={this.insertList} />
      </div>
    );
  }
}

export default Todolist;
