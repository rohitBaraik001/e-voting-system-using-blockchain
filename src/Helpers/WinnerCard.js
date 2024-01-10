import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider } from "@mui/material";

export default function WinnerCard(props) {
  return (
    <Card sx={{ maxWidth: 300, textAlign: "center" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            style={{ color: "#230AEE" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.partyName}
          </Typography>
          <Divider />
          <Typography
            style={{ color: "purple", marginTop: 10 }}
            variant="h5"
            color="text.secondary"
          >
            {props.votes} Votes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
