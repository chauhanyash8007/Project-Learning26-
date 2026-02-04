import React from "react";
import { useParams } from "react-router-dom";

export const TeamDetails = () => {
  const  teamName  = useParams().teamName

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{teamName} Cricket Team</h1>

      <p><b>Team Name:</b> {teamName}</p>
      <p><b>Format:</b> ODI / T20 / Test</p>
      <p><b>Governing Body:</b> ICC</p>
      <p><b>Status:</b> International Team</p>
    </div>
  );
};
