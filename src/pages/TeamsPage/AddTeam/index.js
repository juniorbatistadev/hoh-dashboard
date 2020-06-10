import React from "react";
// import styles from "./index.module.css";
import { Container } from "semantic-ui-react";
import AddTeamForm from "./AddTeamForm";

const AddTeam = () => {
  return (
    <Container>
      <Container style={{ marginTop: 20 }}>
        <AddTeamForm />
      </Container>
    </Container>
  );
};

export default AddTeam;
