import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import SinglePage from '../SinglePage/SinglePage';



const Teams = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <Header/>
            <div className="allTeam container">
                {
                    teams.map(team => <SinglePage teamDetails={team}></SinglePage>)
                }
            </div>
        </div>
    );
};

export default Teams;