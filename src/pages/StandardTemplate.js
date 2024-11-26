import '../styles/contracting.css'

export default function StandardTemplate(){
    return(
        <div className="standard-template">
            <h2>BCG Standard Templates</h2>
            <p>Leverage the options below to self serve your contracting experince with no lawyer</p>
            <div className="wrapper">
                <div className="card">
                    <h1>Generate Standard Contract</h1>
                    <p>Auto generated a standard contract customized to your client with the latest BCG terms</p>
                </div>
                <div className="card">
                    <h1>Download Templates From Microsite</h1>
                    <p>Navigate to client contracting microsite to download the standard template and terms</p>
                </div>
            </div>
        </div>
    )
}