import React, { Component } from 'react';

class ProjectItem extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }
    
  render() {
   
    return (
      <li className="ProjectItem">
            <strong>{this.props.projects.title}</strong> - {this.props.projects.category}
            <a href="#" onClick={this.deleteProject.bind(this, this.props.projects.id)}>Delete</a>
      </li>
    );
  }
}

export default ProjectItem;