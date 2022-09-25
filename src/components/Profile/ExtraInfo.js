import Button from "react-bootstrap/Button";
import styles from "./ExtraInfo.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ExtraInfo(props) {
  return (
    <div className={styles.whole}>
      <div className={styles.detailInfo}>
        <Container>
          <Row>
            <Col sm={11}>
              <h3>
                Detailed info about{" "}
                <span className={styles.underLineWord}>{props.name}</span>
              </h3>
            </Col>
            <Col sm={1}>
              <Button
                variant="secondary"
                onClick={props.handleClose}
                className={styles.backButton}
              >
                Back
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
