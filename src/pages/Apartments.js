import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import ProfilePic from "../components/Profile/ProfilePic";
import ApartmentCard from "../components/Apartments/ApartmentCard";
import {useHistory} from "react-router";


export default function UserPage() {
  const [apartments, setApartments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    initApartments();
  }, []);

  const initApartments = async () => {
    const response = await axios.get("http://46.101.209.28:5034/api/Apartment");
    if (response.status === 200) {
      const data = response.data.slice(0, 2);
      data[0].generalArea = 51.6
      data[1].generalArea = 35.6
      data[0].estateType = "House"
      data[1].estateType = "Apartment"
      setApartments(data);
    }
  };

  const apartmentPressed = (apartmentId) => {
    history.push(`/apartment/${apartmentId}`);
  }

  return (
    <div className="otherPages">
      <Container>
        <Row className="d-flex gap-3">
          {apartments.map((apartment, index) =>
              <ApartmentCard
                  key={`apartment ${index}`}
                  apartment={apartment}
                  apartmentPressed={apartmentPressed}
              />
          )}
          <ProfilePic />
        </Row>
      </Container>
    </div>
  );
}
