import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../../../hooks/useInput";
import { getTeams, addTeamToMatch, getMatchesByPhase } from "./MatchesFunctions.ts";

const EditModalForm = ({ row, setShowModal, setMatches, actualTournament, matchTeams, teamA, teamB }) => {

  const match = useInput("match");
  const teams = useInput("teams");
  const goals = useInput("goals");
  const winner = useInput("winner");

  const [tournamentTeams, setTournamentTeams] = useState([]);

  const dispatch = useDispatch();

  const phase = useSelector((state) => state.phase);

  useEffect(() => {
    // axios.get(`/api/team/${matchTeams[0].matchId}`).then((res) => console.log(res.data));
    getTeams().then((data) => setTournamentTeams(data));
  }, []);
  
  const handleEdit = async (match) => {
    const editMatch = await addTeamToMatch(match);
    const actualization = await getMatchesByPhase({
      tournamentId: actualTournament,
      fase: phase,
    }).then((data) => setMatches(data));
    const closeModal = await setShowModal(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    handleEdit([{ id: row.id, teamId: teams.value, goals: goals.value }]);
  };


console.log(matchTeams)
  // console.log(teamA)
  // console.log(teamB)

  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="match"
          >
            Team A
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
            id="match"
            type="text"
            name="match"
            value={teamA.name}
            disabled
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Teams
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="winner"
            {...teams}
          >
            <option selected disabled value="">
              Select a Team
            </option>
            {tournamentTeams.map((team, i) => (
              <option key={i} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="goals"
          >
            Goals
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="goals"
            type="text"
            // defaultValue={row.goals}
            {...goals}
          />
        </div>

        {/* <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Winner
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="winner"
            defaultValue={row.winner}
            {...winner}
          >
            <option selected disabled value="">
              Select Winner
            </option>
            <option value={true}>true</option>
            <option value={false}>false</option>
          </select>
        </div> */}

        <button
          onSubmit={onSubmit}
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditModalForm;
