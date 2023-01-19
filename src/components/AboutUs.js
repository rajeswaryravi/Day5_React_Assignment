import './style.css';
import Services from "./Services";
function myAboutUs(){
    return(
        <>
        <div>
        <section class="section-2" id="section-2">
        <h1 class="section-heading section-2-heading">About Me</h1>
        <div class="progress-bars-wrapper">
          <div class="progress-bar">
            <p class="progress-text">
              HTML
              <span></span>%
            </p>
            <div class="progress-percent"></div>
          </div>
          <div class="progress-bar">
            <p class="progress-text">
              CSS
              <span></span>%
            </p>
            <div class="progress-percent"></div>
          </div>
          <div class="progress-bar">
            <p class="progress-text">
              JavaScript
              <span></span>%
            </p>
            <div class="progress-percent"></div>
          </div>
          <div class="progress-bar">
            <p class="progress-text">
              SASS
              <span></span>%
            </p>
            <div class="progress-percent"></div>
          </div>
          <div class="progress-bar">
            <p class="progress-text">
              ReactJS
              <span></span>%
            </p>
            <div class="progress-percent"></div>
          </div>
          <div class="progress-bar">
            <p class="progress-text">
              NodeJS
              <span></span>%
            </p>
            <div class="progress-percent"></div>
          </div>
          <div class="progress-bar">
            <p class="progress-text">
              MongoDB
              <span></span>%
            </p>
            <div class="progress-percent"></div>
          </div>
        </div>
       
      </section>
      <Services></Services>
     </div>
        </>
        
    )
}
export default myAboutUs;