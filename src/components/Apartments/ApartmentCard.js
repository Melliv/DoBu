import ApartmentPic from "../../media/floor_plan.png";
import styles from "./ApartmentCard.module.css";

export default function ApartmentCard(props) {
  const apartmentPressed = () => {
    props.apartmentPressed(props.apartment.id);
  };

  return (
    <div
      className={`card p-4 ${styles.container}`}
      style={{ width: "20rem" }}
      onClick={apartmentPressed}
    >
      <img
        className="card-img-top"
        src={ApartmentPic}
        alt="Floor plan"
        style={{ width: "16rem" }}
      />
      <div className={styles.cardBody}>
        <h4 className={styles.address}>{props.apartment.address}</h4>
        <p className={styles.text}>{props.apartment.estateType}</p>
        <p className={styles.text}>{props.apartment.generalArea} m²</p>
      </div>
    </div>
  );
}
