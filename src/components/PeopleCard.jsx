import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Avatar, Box, CardHeader } from "@mui/material";

const styles = {
  media: {
    background: 'red',
    height: 250,
    width: 275,
  }
};

const PeopleCard = ({ name, age, email, photoUrl }) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 375, maxHeight: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={styles.media}
          image={photoUrl}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" color="blue" textAlign="center">
            {name} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Idade:</b> {age} <br /> 
            <b>Email:</b> {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" color="primary">
          Compartilhar
        </Button>
        <Button size="medium" variant="contained">
          Linkedin
        </Button>
      </CardActions>
    </Card>
  );
};

export default PeopleCard;