import StatusBar from "../StatusBar/StatusBar";

function Card(props) {
  return (
    <div className="cardContainer">
      <div
        className={props.status === "Alive" ? "card" : props.status === "Dead" ? "card dead" : "card unknown"}
        style={{ backgroundImage: `url(${props.imageLink})` }}
      ></div>
      <div>{props.status !== "Alive" ? <StatusBar status={props.status} /> : ""}</div>
    </div>
  );
}

export default Card;
