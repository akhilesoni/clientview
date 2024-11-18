import { Link } from "react-router-dom";
import '../styles/contracting.css'

export default function Contracting(){
    return (
        <div className="contracting">
            <div className="banner-wrapper" style={{backgroundImage:'url(/images/contracting.jpg)'}}>
                <div className="banner">
                    <h2>Contracting</h2>
                    <p>Connect With IT</p>
                </div>
            </div>

            <div className="contracting-main">
                <div className="menu">
                    <p className="item"><i className="fa fa-home"></i> Home</p>
                    <p className="item"><i className="fa fa-newspaper-o"></i> My Contracts</p>
                    <p className="item"><i className="fa fa-search"></i> MSA Finder</p>
                    <p className="item"><i className="	fa fa-vcard-o"></i> Admin Console</p>
                </div>
                <div className="cards">
                    <h2>Welcome to <span>Contracting</span></h2>

                    <div className="wrapper">
                        <div className="card">
                            <i className="fa fa-file-text-o"></i>
                            <p>I want</p>
                            <h1>BCG Standard Template</h1>
                        </div>
                        <div className="card">
                            <i className="fa fa-legal"></i>
                            <p>I need</p>
                            <h1>Lawyer Support</h1>
                        </div>
                        <div className="card">
                            <i className="fa fa-upload"></i>
                            <p>I need to</p>
                            <h1>Upload a New Contract</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}