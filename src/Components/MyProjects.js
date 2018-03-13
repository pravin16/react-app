import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class MyProjects extends Component {
    deleteProject(id){
        this.props.onDelete(id)
    }
    
  render() {
      let projectItem;
      //console.log(this.props)
      if(this.props.projects){
          projectItem = this.props.projects.map(project => {
             // console.log(project)
              return (
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} projects={project} />
              )
          })
      }

    return (
      <div className="MyProjects">
       <h3>Latest Update Project</h3>
        {projectItem}
      </div>
    );
  }
}

export default MyProjects;