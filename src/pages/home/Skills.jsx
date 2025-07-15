import React from "react";
import { styled } from "@mui/material/styles";
import styled1 from "@emotion/styled";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Container, Grid, Typography } from "@mui/material";

const SkillSection = styled1.div`
    padding: 50px 0;
`;

const PersonalDetails = styled1.div`
    box-shadow: 0 0px 25px 10px rgb(0 0 0 / 9%);
    padding: 30px;
    border-radius: 5px;
`;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 3,
  marginTop: 9,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "#000",
  },
}));

function Skills() {
  return (
    <SkillSection>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item size={{ lg: 9, md: 12, xs: 12 }}>
            <Typography
              textTransform="uppercase"
              variant="h5"
              fontWeight="bold"
              gutterBottom
            >
              {"skills & language"}
            </Typography>

            <Grid container mb={2} mt={5}>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Grid container>
                  <Grid item size={{ sm: 4, xs: 12 }}>
                    <Typography
                      variant="caption"
                      textTransform="uppercase"
                      color="#000"
                      fontWeight="bold"
                    >
                      Team Collaboraion
                    </Typography>
                  </Grid>
                  <Grid item size={{ sm: 8, xs: 12 }} pr={2}>
                    <BorderLinearProgress variant="determinate" value={70} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Grid container>
                  <Grid item size={{ sm: 4, xs: 12 }}>
                    <Typography
                      variant="caption"
                      textTransform="uppercase"
                      color="#000"
                      fontWeight="bold"
                    >
                      javascript
                    </Typography>
                  </Grid>
                  <Grid item size={{ sm: 8, xs: 12 }} pr={2}>
                    <BorderLinearProgress variant="determinate" value={95} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container mb={2} mt={2}>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Grid container>
                  <Grid item size={{ sm: 4, xs: 12 }}>
                    <Typography
                      variant="caption"
                      textTransform="uppercase"
                      color="#000"
                      fontWeight="bold"
                    >
                      innovation
                    </Typography>
                  </Grid>
                  <Grid item size={{ sm: 8, xs: 12 }} pr={2}>
                    <BorderLinearProgress variant="determinate" value={75} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Grid container>
                  <Grid item size={{ sm: 4, xs: 12 }}>
                    <Typography
                      variant="caption"
                      textTransform="uppercase"
                      color="#000"
                      fontWeight="bold"
                    >
                      react js
                    </Typography>
                  </Grid>
                  <Grid item size={{ sm: 8, xs: 12 }} pr={2}>
                    <BorderLinearProgress variant="determinate" value={92} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container mb={2} mt={2}>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Grid container>
                  <Grid item size={{ sm: 4, xs: 12 }}>
                    <Typography
                      variant="caption"
                      textTransform="uppercase"
                      color="#000"
                      fontWeight="bold"
                    >
                      critical thinking
                    </Typography>
                  </Grid>
                  <Grid item size={{ sm: 8, xs: 12 }} pr={2}>
                    <BorderLinearProgress variant="determinate" value={70} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Grid container>
                  <Grid item size={{ sm: 4, xs: 12 }}>
                    <Typography
                      variant="caption"
                      textTransform="uppercase"
                      color="#000"
                      fontWeight="bold"
                    >
                      TypeScript
                    </Typography>
                  </Grid>
                  <Grid item size={{ sm: 8, xs: 12 }} pr={2}>
                    <BorderLinearProgress variant="determinate" value={90} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container mb={2} mt={2}>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Grid container>
                  <Grid item size={{ sm: 4, xs: 12 }}>
                    <Typography
                      variant="caption"
                      textTransform="uppercase"
                      color="#000"
                      fontWeight="bold"
                    >
                      visual design
                    </Typography>
                  </Grid>
                  <Grid item size={{ sm: 8, xs: 12 }} pr={2}>
                    <BorderLinearProgress variant="determinate" value={85} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Grid container>
                  <Grid item size={{ sm: 4, xs: 12 }}>
                    <Typography
                      variant="caption"
                      textTransform="uppercase"
                      color="#000"
                      fontWeight="bold"
                    >
                      wordpress
                    </Typography>
                  </Grid>
                  <Grid item size={{ sm: 8, xs: 12 }} pr={2}>
                    <BorderLinearProgress variant="determinate" value={85} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container mb={2} mt={2}>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Grid container>
                  <Grid item size={{ sm: 4, xs: 12 }}>
                    <Typography
                      variant="caption"
                      textTransform="uppercase"
                      color="#000"
                      fontWeight="bold"
                    >
                      UI Development
                    </Typography>
                  </Grid>
                  <Grid item size={{ sm: 8, xs: 12 }} pr={2}>
                    <BorderLinearProgress variant="determinate" value={80} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Grid container>
                  <Grid item size={{ sm: 4, xs: 12 }}>
                    <Typography
                      variant="caption"
                      textTransform="uppercase"
                      color="#000"
                      fontWeight="bold"
                    >
                      php
                    </Typography>
                  </Grid>
                  <Grid item size={{ sm: 8, xs: 12 }} pr={2}>
                    <BorderLinearProgress variant="determinate" value={85} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item size={{ lg: 3, md: 12, xs: 12 }}>
            <PersonalDetails>
              <Typography
                textTransform="capitalize"
                variant="h6"
                fontWeight="bold"
                mb={3}
                gutterBottom
              >
                languages
              </Typography>

              <Grid container mb={1}>
                <Grid item size={{ xs: 6 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#000"
                    fontWeight="bold"
                  >
                    tamil
                  </Typography>
                </Grid>
                <Grid item size={{ xs: 6 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#788ea7"
                    fontWeight="bold"
                  >
                    advanced
                  </Typography>
                </Grid>
              </Grid>
              <Grid container mb={1}>
                <Grid item size={{ xs: 6 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#000"
                    fontWeight="bold"
                  >
                    english
                  </Typography>
                </Grid>
                <Grid item size={{ xs: 6 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#788ea7"
                    fontWeight="bold"
                  >
                    advanced
                  </Typography>
                </Grid>
              </Grid>
            </PersonalDetails>
          </Grid>
        </Grid>
      </Container>
    </SkillSection>
  );
}

export default Skills;
