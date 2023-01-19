import FooterText from "./FooterText";
function MyFooter(){
    return(
        <>
        <div className="footer">
        <footer class="section-5 center">
        <div class="social-media">
          <a href="#none" class="social-media-link">
            <i class="fab fa-github-square"></i>
          </a>
          <a href="#none" class="social-media-link">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="#none" class="social-media-link">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#none" class="social-media-link">
            <i class="fab fa-instagram-square"></i>
          </a>
        </div>
        <FooterText textcopy="Copyright &copy; CodeAndCreate. All Rights Reserved"></FooterText>
      </footer>
      
        </div>
        </>
    )

}
export default MyFooter;