import { useNavigate } from "react-router-dom"


export default function ContractingHome(){

    const navigate = useNavigate()
    return (
        <>
         <h2>Welcome to <span>Contracting</span></h2>

        <div className="wrapper">
            <div onClick={()=> navigate('standard-templates')} className="card">
                <i className="fa fa-file-text-o"></i>
                <p>I want</p>
                <h1>BCG Standard Template</h1>
            </div>
            <div onClick={()=> navigate('lawyer-assisted')} className="card">
                <i className="fa fa-legal"></i>
                <p>I need</p>
                <h1>Lawyer Support</h1>
            </div>
            <div onClick={()=> navigate('upload-contract')} className="card">
                <i className="fa fa-upload"></i>
                <p>I need to</p>
                <h1>Upload a New Contract</h1>
            </div>
        </div>
        </>
    )
}