import { Typography } from "@mui/material";
import { Card, Image, Link } from "./character-card.styled";

const CharacterCard = ({ name, location, img }) => {
  return (
    <Link href="#">
      <Card bgColor="#DCDCDC">
        <Typography variant="h7" component="h4">
          {name}
        </Typography>
        <Image src={img} alt={name} />
        <Typography component="p">Lives on {location}</Typography>
      </Card>
    </Link>
  );
};

export default CharacterCard;
