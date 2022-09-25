import styles from "./Search.module.css";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .get("http://46.101.209.28:5034/search", {
        params: { q: userInput },
      })
      .then((response) => {
        props.onSubmit(response.data);
      })
      .catch(props.onSubmit([]));
  };

  const handleClear = () => {
    axios
      .get(`http://46.101.209.28:5034/api/Apartment/${props.id}`)
      .then((response) => {
        const temporaryList = [];
        response.data.items.forEach((element) => {
          temporaryList.push({
            name: element.name,
            type: element.type,
            description: element.description,
            apartmentId: element.apartmentId,
            imageUrl: element.imageUrl,
            id: element.id,
          });
        });
        props.onSubmit(temporaryList);
      });
    setUserInput("");
  };

  return (
    <div className={`${styles.searchWrapper}`}>
      <input
        className={`input ${styles.search}`}
        type="text"
        placeholder="Search for an item"
        onChange={handleInputChange}
        value={userInput}
      />
      <span className={styles.buttonsContainer}>
        <Button variant="primary" onClick={handleFormSubmit}>
          Search
        </Button>
      </span>
    </div>
  );
}
