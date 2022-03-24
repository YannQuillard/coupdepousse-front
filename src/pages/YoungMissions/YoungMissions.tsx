import React, { useState } from 'react';
import "./YoungMissions.css"
import '../../App.css';
import Header from "../../components/Header/Header"
import Card from "../../components/Mission_card/Mission_card"

const YoungMissions = (props: any) => {

	const [visibleM, setVisibleM] = useState(false) 
	const toggleVisibleM = () => setVisibleM(!visibleM)

	const [visibleMC, setVisibleMC] = useState(true) 
	const toggleVisibleMC = () => setVisibleMC(!visibleMC)

	const [visibleMP, setVisibleMP] = useState(false) 
	const toggleVisibleMP = () => setVisibleMP(!visibleMC)

	return (
		<div>
			<Header color="Black"/>
			<div className='MissionsContainer'>
				<div className='MissionsPart MissionsC'>
					<h3
					onClick={toggleVisibleM}
					>
						Candidatures
					</h3>
					{visibleM &&
					<div className='MissionsList'>
						<Card/>
						<Card/>
					</div>}
				</div>
				
				<div className='MissionsPart MissionsMC'>
					<h3
					onClick={toggleVisibleMC}
					>
						Missions confirmées
					</h3>
					{visibleMC &&
					<div className='MissionsList'>
						<Card/>
						<Card/>
					</div>}
				</div>
				<div className='MissionsPart MissionsMP'>
					<h3
					onClick={toggleVisibleMP}
					>
						Missions passées
					</h3>
					{visibleMP &&
					<div className='MissionsList'>
						<Card/>
						<Card/>
					</div>}
				</div>

			</div>
		</div>
	);
}

export default YoungMissions;