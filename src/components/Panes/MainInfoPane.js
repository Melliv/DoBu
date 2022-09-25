import SimpleCard from "../UI/Card/SimpleCard";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

export default function MainInfoPane(props) {
  return (
    <SimpleCard>
      <table>
        <thead>
          <h3>
            <span>
              {" "}
              <FontAwesomeIcon icon={faAtom} />
            </span>{" "}
            Main Info
          </h3>
        </thead>
        <tbody>
          <tr>
            <td>
              Year of construction: <b>2016</b>
            </td>
          </tr>
          <tr>
            <td>
              Security alarm: <b> Installation option</b>
            </td>
          </tr>
          <tr>
            <td>
              Fire alarm system: <b>ATS sensor in apartments and stairwell</b>
            </td>
          </tr>
          <tr>
            <td>
              Heating system: <b>Central heating</b>
            </td>
          </tr>
        </tbody>
      </table>
    </SimpleCard>
  );
}
