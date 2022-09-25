import SimpleCard from "../UI/Card/SimpleCard";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/esm/Button";

export default function ReminderPane() {
  return (
    <SimpleCard>
      <table>
        <thead>
          <h3>
            <span>
              <FontAwesomeIcon icon={faPersonChalkboard} />
            </span>{" "}
            Reminders
          </h3>
        </thead>
        <tbody>
          <tr>
            <td>
              <h5>In 1 week:</h5>Change your air filter.{" "}
              <Button
                variant="primary"
                target="_blank"
                rel="noreferrer"
                href="https://filtripood.ee/toode/systemair-save-vtr-250-b/"
              >
                Order a new one
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <h5>In 2 months:</h5>Control heat system pressure.{" "}
              <Button
                variant="primary"
                target="_blank"
                rel="noreferrer"
                href="https://www.toruproff.eu/"
              >
                Order a service
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <h5>In 1 year:</h5>Check waterpipes.{" "}
              <Button
                variant="primary"
                target="_blank"
                rel="noreferrer"
                href="http://www.novire.eu/"
              >
                Order a service
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </SimpleCard>
  );
}
