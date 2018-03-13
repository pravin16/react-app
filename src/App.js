import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import MyProjects from './Components/MyProjects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects : [],
      todos : []
    }
  }

  getProjects(){
    this.setState({
      projects : [
        {
          id: uuid.v4(),
          title : "Business Website",
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          title : "Social App",
          category: "Mobile Development"
        },
        {
          id: uuid.v4(),
          title : "Networking",
          category: "Web Development"
        }
      ]
    })
  }

  getTodos(){
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        dataType: 'json',
        cache: false,
        success: function(data){
            //console.log(data);
            this.setState({todos:data}, function(){
              console.log(this.state.todos)
            })
        }.bind(this),
        failure: function(xhr, status, err){
            console.log(err);
        }
      })
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }


  handleAddProject(newProject){
    //console.log(newProject);
    let projects = this.state.projects;
    projects.push(newProject);
    this.setState({projects:projects});
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id );
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
       <AddProject addProject={this.handleAddProject.bind(this)}/>
       <MyProjects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
       <hr/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
