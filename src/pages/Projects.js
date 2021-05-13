import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import projects from "../projects.json";
import React, { Component } from "react";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.projects.map(projects => (
          <Card
            id={projects.id}
            key={projects.id}
            name={projects.name}
            image={projects.image}
            github={projects.github}
            url={projects.url}
            />
        ))}
      </Wrapper>
    );
  }
}

export default App;