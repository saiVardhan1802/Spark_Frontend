import styles from "../styles/components/NavBox.module.css";

export default function NavBox(props) {
    return (
        <div className={`${styles.box} ${props.borderClass}`}>
            <img src={props.img} />
            <p>{props.text}</p>
        </div>
    )
}