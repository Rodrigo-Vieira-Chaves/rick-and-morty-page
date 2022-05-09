function StatusBar(props) {
  return props.status === "Dead" ? <h1 className="statusDead">DEAD</h1> : <h1 className="statusUnknown">UNKNOWN</h1>;
}

export default StatusBar;
