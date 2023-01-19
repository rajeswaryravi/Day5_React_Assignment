import './style.css';
function MyHeaderText(props){
    return(
        <>
        <h1 className="section-1-heading">{props.text}</h1>
        </>
    )

}
export default MyHeaderText;