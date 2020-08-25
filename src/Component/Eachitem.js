import React, { Component } from "react";

class Eachitem extends Component {
  constructor(props) {
    super(props);
    this.state={isEditing:false,isActive:true,item:this.props.item.todo};
  }

  handleClick = () => {
    this.props.click();
  };

  handleDelete=()=>{
    this.props.del(this.props.id);
  }

  toggleForm=()=>{
    this.setState({isEditing:!this.state.isEditing});
  }

  toggleActive=()=>{
    //下划线
    this.setState({isActive:!this.state.isActive});
    //修改父元素的值
    this.props.click(this.props.id);
  }

  handelChange=(e)=>{
    this.setState({item:e.target.value});
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.edit(this.props.id,this.state.item);
    this.toggleForm();
  }

  render() {
    return (
      <div>
        {this.state.isEditing === false ? (
          <div>
            {this.state.isActive === false ? (
              <span
                onClick={this.toggleActive}
                style={{ textDecoration: "line-through" }}
              >
                {this.props.item.todo}
              </span>
            ) : (
              <span onClick={this.toggleActive}>{this.props.item.todo}</span>
            )}
            <button onClick={this.toggleForm}>Edit</button>
            <button name='delete' onClick={this.handleDelete}>Delete</button>
          </div>
        ) : (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.item} onChange={this.handelChange} name='update'/>
              <button>Save</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Eachitem;
