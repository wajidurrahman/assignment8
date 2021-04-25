import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SinglePage = ({ teamDetails }) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = teamDetails
    return (
        <>
            <div className="team">
                <img src={strTeamBadge} alt="" />
                <h2>{strTeam}</h2>
                <p>sports type: {strSport}</p>
                <Link to={`/team/${idTeam}`}><button className='btn'>Explore <FontAwesomeIcon icon={faArrowAltCircleRight} /></button></Link>
            </div>
        </>
    );
};

export default SinglePage;