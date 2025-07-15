import React from "react";
import styled from "@emotion/styled";
import { Container, Grid, Typography, Box } from "@mui/material";
import BGImage from "./../../assets/images/mountain.png";
import ProfileImage from "./../../assets/images/profilepic.jpg";

const getWidthString = (span) => {
  if (!span) return;

  let width = (span / 12) * 100;
  return `width: ${width}%`;
};

const BannerBG = styled.div`
  background: url(${BGImage}) no-repeat right bottom;
  // opacity: 0.5;
  background-size: auto 300px;
`;

const BannerSection = styled.div`
  background: rgb(0 0 0 / 85%);
  color: #fff;
  padding: 50px 0;
`;

const Image = styled.img`
  object-fit: cover;
  border: 10px solid #fff;
  box-sizing: border-box;
  box-shadow: 0 0px 30px 15px rgb(0 0 0 / 15%);
  background-color: #fff;
  border-radius: 5px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }
`;

function Banner() {
  return (
    <BannerBG>
      <BannerSection>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid
              item
              size={{ xl: 3, lg: 3, md: 4, sm: 12, xs: 12 }}
              position="relative"
            >
              <Image src={ProfileImage} alt="author | Muthupandi" />
            </Grid>
            <Grid
              item
              size={{ xl: 9, lg: 9, md: 8, sm: 12, xs: 12 }}
              sx={{ padding: 2 }}
            >
              <Box
                sx={{ padding: { lg: "0px 0 50px 50px", sm: "0 0 20px 20px" } }}
              >
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  color="#fdd65c"
                  sx={{
                    typography: { xl: "h2", lg: "h2", sm: "h3", xs: "h4" },
                  }}
                >
                  Sivanananchaperumal K
                </Typography>
                <Typography
                  variant="h5"
                  mb={3}
                  gutterBottom
                  sx={{
                    typography: { xl: "h5", lg: "h5", sm: "h6", xs: "body2" },
                  }}
                >
                  Frontend Developer / WordPress Developer
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="500"
                  textTransform="uppercase"
                  color="#a5abb5"
                  gutterBottom
                >
                  Location: Thiruvanthapuram
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="500"
                  textTransform="uppercase"
                  color="#a5abb5"
                  mb={3}
                  gutterBottom
                >
                  {"Information & Technology Services"}
                </Typography>
                <Typography fontWeight="bold" gutterBottom>
                  Previous:{" "}
                  <Typography variant="p" fontWeight="normal">
                    Software Engineer
                  </Typography>
                </Typography>
                <Typography fontWeight="bold" gutterBottom>
                  Education:{" "}
                  <Typography variant="p" fontWeight="normal">
                    Bachelor of Engineering
                  </Typography>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </BannerSection>
    </BannerBG>
  );
}

export default Banner;
