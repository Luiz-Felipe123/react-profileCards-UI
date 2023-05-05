import React from "react";
import Grid from "@mui/material/Grid";
import PeopleCard from "../components/PeopleCard";

function PeoplePage() {
  const peopleData = [
    { name: "Matheus", age: 39, email: "john.doe@example.com", photoUrl: "https://portal.mch.ifsuldeminas.edu.br/images/A_Ensino/Imagens/Docentes/Matheus.jpg" },
    { name: "Guilherme", age: 21, email: "jane.smith@example.com", photoUrl: "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg" },
    { name: "Luiz Felipe", age: 21, email: "mark.johnson@example.com", photoUrl: "https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__480.jpg" },
  ]; // Dados de exemplo das pessoas
  https: //portal.mch.ifsuldeminas.edu.br/images/A_Ensino/Imagens/Docentes/Matheus.jpg
  return (
    <div>
      <Grid container spacing={3} paddingRight={"50px"} paddingTop={"50px"} paddingLeft={"50px"}>
        {peopleData.map((person, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PeopleCard
              name={person.name}
              age={person.age}
              email={person.email}
              photoUrl={person.photoUrl} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PeoplePage;
