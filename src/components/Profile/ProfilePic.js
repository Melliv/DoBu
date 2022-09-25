import profilePic from "../../media/nublu.jpg";
import styles from "./ProfilePic.module.css";
import SimpleCard from "../UI/Card/SimpleCard";
import Mail from "../../media/mail-142.svg";
import Phone from "../../media/phone-1.svg";

export default function ProfilePic(props) {
  return (
      <div style={{width: "400px"}}>
          <SimpleCard>
              <div>
                  <img
                      src={profilePic}
                      alt="Profile"
                      className={styles.image}
                      onClick={props.handleImageClick}
                  />
                  <div >

                      <h3 style={{textAlign: "center"}}>
                          nublu
                      </h3>
                      <div className="d-flex gap-3">
                          <img src={Mail} alt="" style={{width: "20px", height: "20px", padding: 0}}/>
                          <span>
                              nublu@gmail.com
                          </span>
                      </div>

                      <div className="d-flex gap-3 pt-2">
                          <img src={Phone} alt="" style={{width: "20px", height: "20px", padding: 0}}/>
                          <span>
                              58 3904 8146
                          </span>
                      </div>

                  </div>
              </div>
          </SimpleCard>
      </div>
  );
}
