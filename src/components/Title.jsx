export default function Title(props) {
    return (
        <p className={props.className} style={{
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 'bold',
            color: 'black',
            ...props.style
        }}>SPARK</p>
    )
}