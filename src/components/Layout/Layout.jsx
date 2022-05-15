import React from "react";
import styled from "styled-components";
import CardFunction from "../Card/Card";

const App = styled.div``;
const Container = styled.div``;

function Layout(props) {
  return (
    <App>
      {props.props?.length > 0 ? (
        <Container>
          {props.props.map(character => (
            <CardFunction imageLink={character.image} status={character.status} />
          ))}
        </Container>
      ) : (
        <Container>Empty</Container>
      )}
    </App>
  );
}

export default Layout;
