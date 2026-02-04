import React from "react";
import { Link } from "react-router-dom";

export const CricketTeams = () => {

  const teams = [
    { teamId: 1, teamName: "India" },
    { teamId: 2, teamName: "Australia" },
    { teamId: 3, teamName: "England" },
    { teamId: 4, teamName: "Pakistan" },
    { teamId: 5, teamName: "South Africa" },
    { teamId: 6, teamName: "New Zealand" },
    { teamId: 7, teamName: "Sri Lanka" },
    { teamId: 8, teamName: "West Indies" },
    { teamId: 9, teamName: "Bangladesh" },
    { teamId: 10, teamName: "Afghanistan" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Cricket Teams</h1>

      {teams.map((team) => (
        <li key={team.teamId}>
          <Link to={`/team/${team.teamName}`}>
            {team.teamName}
          </Link>
        </li>
      ))}
    </div>
  );
};
