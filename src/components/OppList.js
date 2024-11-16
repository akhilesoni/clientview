

export default function OppList(props){
    return (
    <div className='opp-list'>
        <div className='wrapper'>
        <h2>{props.name}</h2>
        <button>+</button>
        </div>
        {props.list.map((opp) => {
            return(
                <div className='opp' key={opp.id}>
                    <div>
                        <p className='project-name'>{opp.projectName}</p>
                        <p className='client-name'>{opp.clientName}</p>
                    </div>
                    <p className='fee'>${opp.fee}</p>
                </div>
            )
        })}
    </div>
    )
}