import { Link } from "react-router-dom";
import '../styles/home.css'

export default function Home(){
    return (
        <div className="home" style={{backgroundImage:"url('/images/landing.jpg')"}}>
          <p className="banner">Welcome to <span>Client</span> view</p>

          <div className="wrapper">
            <div className="home-card">
                <img src="/images/pipeline.jpg"/>
                <h2>Pipeline</h2>
                <p>View Opportunity, lead, proposal, won and in idea stage</p>
                <span>VIEW PIPELINE</span>
            </div>
            <div className="home-card">
            <img src="/images/contracting.jpg"/>
                <h2>Contracting</h2>
                <p>For all your contracting needs, see all your contracts and request reviews</p>
                <span>VIEW CONTRACTING</span>
            </div>
            <div className="home-card">
            <img src="/images/invoicing.jpg"/>
                <h2>Invoicing</h2>
                <p>request invoice and see all the collections</p>
                <span>VIEW INVOIVING</span>
            </div>
            <div className="home-card">
            <img src="/images/reports.jpg"/>
                <h2>Reports</h2>
                <p>end to end client view reports</p>
                <span>VIEW REPORTS</span>
            </div>
          </div>
        </div>
    )
}