import StatusBar from "../StatusBar/StatusBar";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  border: solid 2px black;
  filter: ${props => (props.status === "Alive" ? "" : props.status === "Dead" ? "hue-rotate(180deg)" : "grayscale(100%)")};
  background-image: url("${props => props.imageLink}");
  background-size: contain;
`;

function CardFunction(props) {
  return (
    <CardContainer>
      <Card imageLink={props.imageLink} status={props.status}></Card>
      {props.status !== "Alive" ? <StatusBar status={props.status} /> : ""}
    </CardContainer>
  );
}

export default CardFunction;
