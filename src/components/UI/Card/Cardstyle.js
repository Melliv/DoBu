import styles from "./Cardstyle.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cardstyle(props) {
  return (
    <div className={`centered ${styles.card}`}>
      <Card style={{ width: props.width }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
