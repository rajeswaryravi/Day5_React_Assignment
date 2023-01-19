import App from "../App";
import HeaderText from "./HeaderText";
import ProfileImg from "./ProfileImg";
import Navigation from "./Navigation";

function MyHeader(){
    return(
        <>
        <div className="banner_image" style={{backgroundImage:"URL(.././images/bg.jpg)", height:"600px"}}>
        <HeaderText text="WEB DEVELOPER"></HeaderText>
        <ProfileImg></ProfileImg>
        <Navigation></Navigation>
        </div>
        </>
    )

}
export default MyHeader;