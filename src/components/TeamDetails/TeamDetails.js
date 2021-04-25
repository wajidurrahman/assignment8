import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import facebook from '../../Images/Facebook.png';
import twitter from '../../Images/Twitter.png';
import YouTube from '../../Images/YouTube.png';


const TeamDetails = () => {
    const {id} = useParams()
    const [teamDetails, setTeamDetails] = useState([])

    const {strTeamBadge,strTeam, intFormedYear, strCountry, strSport, strGender, strTeamFanart4, strStadiumDescription, strDescriptionFR, strTwitter, strFacebook, strYoutube} = teamDetails

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams[0]))
    }, [id])
    return (
        <div>
            <Header logo={strTeamBadge}/>
            <div className="container">
                <div className="teamDetailsContainer container">
                    <div className="teamDetails">
                        <h1>{strTeam}</h1>
                        <h4>Founded: {intFormedYear}</h4>
                        <h4>Country: {strCountry}</h4>
                        <h4>Sports type: {strSport}</h4>
                        <h4>gender: {strGender}</h4>
                    </div>
                    <div className="teamImg">
                        <img src={strTeamFanart4} alt=""/>
                    </div>
                </div>
                <div className="description">
                    <div>
                        {strStadiumDescription}
                    </div>
                    <div>
                        {strDescriptionFR}
                    </div>
                </div>
                <div className='socialIcon'>
                    <a href={`https://${strTwitter}`}><img src={twitter} alt=""/></a>
                    <a href={`https://${strFacebook}`}><img src={facebook} alt=""/></a>
                    <a href={`https://${strYoutube}`}><img src={YouTube} alt=""/></a>
                </div>
            </div>
            
        </div>
    );
};

export default TeamDetails;