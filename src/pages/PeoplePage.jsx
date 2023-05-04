import React from "react";
import Grid from "@mui/material/Grid";
import PeopleCard from "../components/PeopleCard";

const PeoplePage = () => {
  const peopleData = [
    { name: "Matheus", age: 39, email: "john.doe@example.com", photoUrl:"https://e7.pngegg.com/pngimages/708/344/png-clipart-dogs-dogs.png" },
    { name: "Guilherme", age: 21, email: "jane.smith@example.com", photoUrl:"https://source.unsplash.com/random" },
    { name: "Luiz Felipe", age: 21, email: "mark.johnson@example.com", photoUrl:"https://source.unsplash.com/random" },
  ]; // Dados de exemplo das pessoas

  return (
    <div>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {peopleData.map((person, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PeopleCard
              name={person.name}
              age={person.age}
              email={person.email}
              photoUrl={person.photoUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PeoplePage;
