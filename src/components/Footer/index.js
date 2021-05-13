import React from "react";
import "./style.css";

function Footer() {
  return (
     
    <footer className="footer">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item"><a class="nav-link" href="mailto:jmalm79@gmail.com">Email Me:</a></li>
          <li class="nav-item"><div class="nav-link"> Call Me#: 651/325-6365</div></li>
          <li class="nav-item"><a class="nav-link" href="https://www.linkedin.com/in/joshua-alm-011687101" target = "_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li class="nav-item"><a class="nav-link" href="https://github.com/jmalm79" target = "_blank" rel="noopener noreferrer">GitHub</a></li>
          <li class="nav-item"><a class="nav-link" href="public/images/joshua_alm_resume.pdf">Resume</a></li>
        </ul>    
    </footer>
     
  );
}

export default Footer;
