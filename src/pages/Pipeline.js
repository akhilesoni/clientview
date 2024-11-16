
import { useEffect, useState } from 'react'
import '../styles/pipeline.css'
import opportunities from '../data/data'
import OppList from '../components/OppList'

export default function Pipeline(){
    const [stageType, setStageType] = useState('active')

    const [idea, setIdea] = useState([])
    const [lead, setLead] = useState([])
    const [proposal, setProposal] = useState([])
    const [inNegotiation, setInNegotiation] = useState([])
    const [won, setWon] = useState([])
    const [onHold, setOnHold] = useState([])
    const [closed, setClosed] = useState([])
    const [dropped, setDropped] = useState([])


    useEffect(() => {
        const stageGroups = {
            idea: [],
            lead: [],
            proposal: [],
            inNegotiation: [],
            won: [],
            onHold: [],
            closed: [],
            dropped: [],
        };
    
        opportunities.forEach((opp) => {
            if (stageGroups[opp.stage]) {
                stageGroups[opp.stage].push(opp);
            }
        });
    
        setIdea(stageGroups.idea);
        setLead(stageGroups.lead);
        setProposal(stageGroups.proposal);
        setInNegotiation(stageGroups.inNegotiation);
        setWon(stageGroups.won);
        setOnHold(stageGroups.onHold);
        setClosed(stageGroups.closed);
        setDropped(stageGroups.dropped);
    }, [opportunities]);
    

    const checkStage = (a,b) =>  {
        if(a==b){
            return 'active'
        }else{
            return 'inactive'
        }
    }

    const checkStageType = (type) => {
        if(type=='market'){
            return (
                <>
                    <OppList name={'Idea'} list={idea}/>
                    <OppList name={'Lead'} list={lead}/>
                    <OppList name={'Proposal'} list={proposal}/>
                    <OppList name={'InNegotiation'} list={inNegotiation}/>
                </>
               
            )
        }else if(type=='inactive'){
            return (
                <>
                   <OppList name={'On Hold'} list={onHold}/>
                    <OppList name={'Closed'} list={closed}/>
                    <OppList name={'Dropped'} list={dropped}/>
                </>
            )
        }else{
            return(
                <>

                    <OppList name={'Proposal'} list={proposal}/>
                    <OppList name={'InNegotiation'} list={inNegotiation}/>
                    <OppList name={'Won'} list={won}/>
                </>
            )
        }
    }
    return (
        <div className="pipeline">
            <div className='banner-wrapper' style={{backgroundImage:'url(/images/pipeline.jpg)'}}>
                <div className="banner">
                    <div>
                    <h2>Pipeline</h2>
                        <div className='stage-toggle'>
                            <p className={checkStage(stageType,'market')} onClick={()=>{setStageType('market')}}>Go to market</p>
                            <p className={checkStage(stageType,'active')} onClick={()=>{setStageType('active')}}>Active</p>
                            <p className={checkStage(stageType,'inactive')} onClick={()=>{setStageType('inactive')}}>Inactive</p>
                        </div>
                    </div>
                    <p>Quick links</p>
                </div>
            </div>
            <div className='opp-holder'>

                {checkStageType(stageType)}
            </div>
        </div>
    )
}