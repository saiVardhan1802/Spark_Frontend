import icon from "../assets/icon.png"

export default function Icon(props) {
    return (
        <img style={{...props.style}} src={icon} />
    )
}