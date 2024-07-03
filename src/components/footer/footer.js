import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import './footer.css'
function Footer() {
  return (
    <div className="footer">
        <div className="row">
          <a href="https://www.instagram.com/madhadikoushik" target="blank"><InstagramIcon /><i className="fa fa-instagram" /></a>
          <a href="https://www.youtube.com/channel/UCZ0BbY6Cj0ggmb9KGOZ30PQ" target="blank"><YouTubeIcon /><i className="fa fa-youtube" /></a>
          <a href="https://github.com/Koushik-122" target="blank"><GitHubIcon /><i className="fa fa-github" /></a>
          <a href="https://www.facebook.com/madhadi.koushik.3" target="blank"><FacebookIcon /><i className="fa fa-facebook" /></a>
        </div>
      </div>
  )
}

export default Footer