import { styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
  }));

  const StyledImg = styled("img")(() => ({}));

  return (
    <>
      <StyledHero>
        ola
        <StyledImg src={Avatar} alt="Avatar" />
      </StyledHero>
    </>
  );
};

export default Hero;
