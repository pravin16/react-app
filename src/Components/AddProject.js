import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {    
    constructor(){
        super();
        this.state = {
            newProject : {}
        }
    }
    static defaultProps = {
        categories : ['Web Design','Mobile Development','Web Development']
    } 

    handleSubmit(e){
        e.preventDefault();
        this.setState({newProject:{
            id: uuid.v4(),
            title : this.refs.title.value,
            category: this.refs.category.value
        }},function(){
            //console.log(this.state);
            //Through propery we can send this newProject data to next phase
            this.props.addProject(this.state.newProject);
        });
        
    }

  render() {
      let options = this.props.categories.map(category => {
          return <option key={category} value={category}>{category}</option>
      })
    return (
      <div>
          <h3>Add Project</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Project Name </label> <br/>
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category</label><br/>
                <select ref="category">
                    {options}
                </select>
            </div>
            <input type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
}

export default AddProject;