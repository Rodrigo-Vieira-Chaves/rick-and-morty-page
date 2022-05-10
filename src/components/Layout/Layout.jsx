import React from "react";
import Card from "../Card/Card";

function Layout(props) {
  return class extends React.Component {
    render() {
      return (
        <div className="App">
          {props?.length > 0 ? (
            <div className="container">
              {props.map(char => (
                <Card imageLink={char.image} status={char.status} />
              ))}
            </div>
          ) : (
            <div className="empty">Empty</div>
          )}
        </div>
      );
    }
  };
}

export default Layout;
