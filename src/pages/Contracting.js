import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import '../styles/contracting.css'
import ContractingHome from "./ContractingHome";
import { upload } from "@testing-library/user-event/dist/upload";
import UploadContract from "./UploadContract";
import StandardTemplate from "./StandardTemplate";
import LawyerAssisted from "./LawyerAssisted";

export default function Contracting(){
    const navigate = useNavigate()
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
                    <p onClick={()=>navigate('')} className="item"><i className="fa fa-home"></i> Home</p>
                    <p onClick={()=>navigate('my-contract')} className="item"><i className="fa fa-newspaper-o"></i> My Contracts</p>
                    <p onClick={()=>navigate('msa-finder')} className="item"><i className="fa fa-search"></i> MSA Finder</p>
                    <p onClick={()=>navigate('admin-console')} className="item"><i className="fa fa-vcard-o"></i> Admin Console</p>
                    <div className="space"></div>
                    <p onClick={()=>navigate('standard-templates')} className="item"><i className="fa fa-file-text-o"></i> Standard Template</p>
                    <p onClick={()=>navigate('lawyer-assisted')} className="item"><i className="fa fa-legal"></i> Lawyer Support</p>
                    <p onClick={()=>navigate('upload-contract')} className="item"><i className="fa fa-upload"></i> Upload Contract</p>
                </div>
                <div className="cards">
                    <Routes>
                        <Route path="" Component={ContractingHome}/>
                        <Route path="/upload-contract" Component={UploadContract}/>
                        <Route path="/lawyer-assisted" Component={LawyerAssisted}/>
                        <Route path="/standard-templates" Component={StandardTemplate}/>
                    </Routes>
                </div>
            </div>

        </div>
    )
}