import styles from "./ProfileInfo.module.css";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default function ProfileInfo(props) {
  const handleRowClick = (id) => {
    axios.get(`http://46.101.209.28:5034/api/Items/${id}`).then((response) => {
      props.onRowClick(response.data);
    });
  };

  return (
    <div>
      <table className={styles.table}>
        <colgroup>
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "30%" }} />
          <col span="1" style={{ width: "10%" }} />
          <col span="1" style={{ width: "10%" }} />
        </colgroup>

        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {props.infoList.map((item, index) => {
            return (
              <tr key={"item-" + index} onClick={() => handleRowClick(item.id)}>
                <td>{item.name}</td>
                <td>
                  {item.description[0].toUpperCase() +
                    item.description.substring(1)}
                </td>
                <td>{item.type}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button variant="primary">Parts</Button>{" "}
                    {!item.name.toLowerCase().includes("bul") && (
                        <Button variant="secondary">Service</Button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
