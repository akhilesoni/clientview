import { Link, useNavigate } from 'react-router-dom'
import '../styles/nav.css'

export default function Nav(){
    const navigate = useNavigate();
    return(
        <div className="nav-wrapper">
            <div className="navbar">
                <img onClick={() => navigate('/')} src="bcg.svg" className="bcg-logo"/>
                <ul className="menu">
                   <Link style={{textDecoration:'none'}} className='link' to={'/pipeline'}> <li>PIPELINE</li> </Link>
                   <Link className='link' to={'/contracting'}>  <li>CONTRACTING</li> </Link>
                    <li>INVOICING</li>
                    <li>REPORTS</li>
                </ul>
                <div className="nav-profile">
                    <p className="profile-pic">A</p>
                    <p className="name">Akhlesh Soni</p>
                </div>
            </div>
        </div>
    )
}