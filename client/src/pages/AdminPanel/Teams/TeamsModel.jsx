import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import { MenuItem } from "@mui/material";


import { Header } from "../../../components/AdminPanel";
import AddModal from "./addModal";
import TeamsForm from "./TeamsForm";
import { getTeams } from "./TeamsFunctions.ts";

import { useTranslation } from "react-i18next";

export default function TeamsModel() {

  const [teams, setTeams] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    getTeams().then((data) => setTeams(data));
  }, []);

  function createData(id, name, logo, info) {
    return { id, name, logo, info };
  }

  const rows = teams.map((team, i) =>
    createData(
      team.id,
      team.name,
      team.logo,
      team.info,
    )
  );

  const { t } = useTranslation(["admin-panel"]);

  return (
    <>
      <Header title={t("Teams")} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">{t("Name")}</TableCell>
              <TableCell align="center">{t("Logo")}&nbsp;</TableCell>
              <TableCell align="center">{t("Info")}&nbsp;</TableCell>
              <TableCell align="center">{t("Edit")}&nbsp;</TableCell>
              <TableCell align="center">{t("Delete")}&nbsp;</TableCell>
              <TableCell align="center">
                <MenuItem sx={{ display: "flex", justifyContent: "center" }} onClick={() => setShowModal(true)}>
                  <AddIcon style={{ color: "green" }} />
                </MenuItem>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TeamsForm row={row} key={i} setTeams={setTeams} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showModal ? (
        <AddModal setShowModal={setShowModal} setTeams={setTeams} />
      ) : null}
    </>
  );
}
