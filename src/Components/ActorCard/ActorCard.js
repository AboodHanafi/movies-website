import { ActorImage, CardContainer } from "./ActorCard.Styles";
import { Link } from "react-router-dom";
import { InfoText } from "../../Screen/MovieScreen/MovieScreen.Styles";

function ActorCard({ img, name, id, country }) {
  return (
    <CardContainer as={Link} to={""}>
      <ActorImage src={img} alt={name} />
      <InfoText margin={"40px 20px"} fontSize={16} fontWeight={700}>
        {name}
        <br />
        {country}
      </InfoText>
    </CardContainer>
  );
}

export default ActorCard;
