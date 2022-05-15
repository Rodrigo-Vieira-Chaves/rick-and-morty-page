import styled from "styled-components";

const StatusBarDead = styled.h1`
  color: darkred;
  font-weight: bolder;
  font-size: large;
  background-color: black;
`;

const StatusBarUnknown = styled.h1`
  color: gray;
  font-weight: bolder;
  font-size: large;
  background-color: black;
`;

function StatusBar(props) {
  return props.status === "Dead" ? <StatusBarDead>DEAD</StatusBarDead> : <StatusBarUnknown>UNKNOWN</StatusBarUnknown>;
}

export default StatusBar;
