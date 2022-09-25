import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ApartmentPic from "../media/floor_plan.png";
import styles from "./ApartmentPage.module.css";
import ExtraInfo from "../components/Profile/ExtraInfo";
import Search from "../components/search/Search";
import ReminderPane from "../components/Panes/ReminderPane";
import MainInfoPane from "../components/Panes/MainInfoPane";

export default function UserPage(props) {
  const [userInfo, setUserInfo] = useState([]);
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [detailInfo, setDetailInfo] = useState();
  const [mainInfo, setMainInfo] = useState({});

  useEffect(() => {
    axios(
      `http://46.101.209.28:5034/api/Apartment/${props.match.params.id}`
    ).then((response) => {
      const temporaryList = [];

      setMainInfo({
        address: response.data.address,
        buildingMaterial: response.data.buildingMaterial,
        constructionMaterial: response.data.constructionMaterial,
        apartmentId: props.match.params.id,
      });

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
      setUserInfo(temporaryList);
    });
  }, [props.match.params.id]);

  const handleImageClick = () => {
    setInfoVisible((prev) => {
      return !prev;
    });
  };

  const handleExtraInfoClose = () => {
    setDetailInfo();
  };

  return (
    <div className="otherPages">
      <Container>
        <Row>
          <Col sm={9}>
            <h1>{mainInfo.address}</h1>
            <Row className={`centered ${styles.apartmentImage}`}>
              <img
                src={ApartmentPic}
                alt="This is the apartment"
                onClick={handleImageClick}
              />
            </Row>
          </Col>
          <Col sm={3}>
            <Row>
              <MainInfoPane mainInfo={mainInfo} />
            </Row>
            <Row>
              <ReminderPane />
            </Row>
          </Col>
        </Row>

        <Row className={styles.apartmentDetailsContainer}>
          <h2>Apartment contents</h2>
          <Search onSubmit={setUserInfo} id={mainInfo.apartmentId} />
          {detailInfo ? (
            <ExtraInfo
              handleClose={handleExtraInfoClose}
              name={detailInfo.name}
              description={detailInfo.description}
              type={detailInfo.type}
            />
          ) : (
            <ProfileInfo infoList={userInfo} onRowClick={setDetailInfo} />
          )}
        </Row>
      </Container>
    </div>
  );
}
