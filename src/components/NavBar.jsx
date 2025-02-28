import Icon from "./Icon";
import NavBox from "./NavBox";
import Title from "./Title";
import styles from "../styles/components/Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={`${styles.spark} ${props.sparkClass}`}>
                <Icon />
                <Title style={{
                    fontSize: '2rem',
                    fontFamily: 'Poppins'
                }}/>
            </div>
            <NavBox navigate={() => navigate("/links")} borderClass={props.linksClass} text="Links" img={props.imgLinks}/>
            <NavBox navigate={() => navigate("/appearance")} borderClass={props.appearanceClass} text="Appearance" img={props.imgAppearance}/>
            <NavBox navigate={() => navigate("/analytics")} borderClass={props.analyticsClass} text="Analytics" img={props.imgAnalytics}/>
            <NavBox navigate={() => navigate("/settings")} borderClass={props.settingsClass} text="Settings" img={props.imgSettings}/>
            <div className="empty">
                
            </div>
        </div>
    )
}