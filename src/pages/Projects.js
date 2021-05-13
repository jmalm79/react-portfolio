import React from "react";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import projects from "../projects.json";

function App() {
  return (
    <Wrapper>
      <Card
        name={projects[0].name}
        url={projects[0].url}
        github={projects[0].github}
        image={projects[0].image}
      />
      <Card
        name={projects[1].name}
        url={projects[1].url}
        github={projects[1].github}
        image={projects[1].image}
      />
      <Card
        name={projects[2].name}
        url={projects[2].url}
        github={projects[2].github}
        image={projects[2].image}
      />
      <Card
        name={projects[3].name}
        url={projects[3].url}
        github={projects[3].github}
        image={projects[3].image}
      />
      <Card
        name={projects[4].name}
        url={projects[4].url}
        github={projects[4].github}
        image={projects[4].image}
      />
      <Card
        name={projects[5].name}
        url={projects[5].url}
        github={projects[5].github}
        image={projects[5].image}
      />
    </Wrapper>
  );
}

export default App;
