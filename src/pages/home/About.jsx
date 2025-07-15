import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import styled from "@emotion/styled";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Resume from "./../../assets/documents/Resume.pdf";

const ContactSection = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #d0d0d0;
`;

const AboutContent = styled.div`
  margin: 75px 0 50px 0;
`;

const Icon = styled.span`
  color: #fdd65c;
  font-size: 20px;
  vertical-align: middle;
  margin-right: 5px;
`;

const PersonalDetails = styled.div`
  box-shadow: 0 0px 25px 10px rgb(0 0 0 / 9%);
  padding: 40px 30px;
  border-radius: 5px;
`;

const MyBtn = styled.button`
  background: #403f3e;
  border: none;
  color: #fff;
  border-radius: 25px;
  padding: 7px 15px;
  text-transform: capitalize;
  margin-top: 30px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
`;

function About() {
  return (
    <Container maxWidth="xl">
      <ContactSection>
        <Grid container>
          <Grid item size={{ lg: 3, md: 4, xs: 12 }}>
            <Typography>
              <Icon>
                <PhoneInTalkIcon />
              </Icon>
              <Link
                color="#4b5e91"
                href="tel:9944387062"
                style={{ textDecoration: "none" }}
                variant="a"
                fontSize={18}
              >
                Call
              </Link>
            </Typography>
          </Grid>
          <Grid item size={{ lg: 3, md: 4, xs: 12 }}>
            <Typography>
              <Icon>
                <WhatsAppIcon />
              </Icon>
              <Link
                color="#4b5e91"
                href="https://api.whatsapp.com/send?phone=9944387062"
                target="_blank"
                style={{ textDecoration: "none" }}
                variant="p"
                fontSize={18}
              >
                Send Message
              </Link>
            </Typography>
          </Grid>
          <Grid item size={{ lg: 3, md: 4, xs: 12 }}>
            <Typography>
              <Icon>
                <CloudDownloadIcon />
              </Icon>
              <Link
                color="#4b5e91"
                href={Resume}
                target="_blank"
                style={{ textDecoration: "none" }}
                variant="p"
                fontSize={18}
              >
                Download Resume
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </ContactSection>

      <AboutContent>
        <Grid container>
          <Grid item size={{ md: 6, xs: 12 }}>
            <Typography
              textTransform="uppercase"
              variant="h5"
              fontWeight="bold"
              gutterBottom
            >
              about me
            </Typography>
            <Typography
              variant="body1"
              paddingRight={10}
              color="#9698af"
              lineHeight="28px"
            >
              I love programming, speaking, traveling, and mentoring. Web
              designer and developer from Chennai, India. I create custom
              websites and applications to help businesses to better online.
            </Typography>
            <MyBtn>
              <a
                href="https://www.linkedin.com/in/sivanananchaperumal-moorthy-9b334a249/"
                target="_blank"
                rel="noreferrer"
              >
                view more
              </a>
            </MyBtn>
          </Grid>
          <Grid item size={{ md: 6, xs: 12 }} sx={{ marginTop: { xs: 3 } }}>
            <PersonalDetails>
              <Typography
                textTransform="capitalize"
                variant="h6"
                fontWeight="bold"
                mb={3}
                gutterBottom
              >
                personal details
              </Typography>

              <Grid container mb={1}>
                <Grid item size={{ lg: 2, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#000"
                    fontWeight="bold"
                  >
                    birthday:
                  </Typography>
                </Grid>
                <Grid item size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#788ea7"
                    fontWeight="bold"
                  >
                    1989 December 18
                  </Typography>
                </Grid>
                <Grid item size={{ lg: 2, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#000"
                    fontWeight="bold"
                  >
                    skype:
                  </Typography>
                </Grid>
                <Grid item size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#788ea7"
                    fontWeight="bold"
                  >
                    sivanunicorn
                  </Typography>
                </Grid>
              </Grid>
              <Grid container mb={1}>
                <Grid item size={{ lg: 2, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#000"
                    fontWeight="bold"
                  >
                    marital:
                  </Typography>
                </Grid>
                <Grid item size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#788ea7"
                    fontWeight="bold"
                  >
                    married
                  </Typography>
                </Grid>
                <Grid item size={{ lg: 2, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#000"
                    fontWeight="bold"
                  >
                    phone:
                  </Typography>
                </Grid>
                <Grid item size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#788ea7"
                    fontWeight="bold"
                  >
                    +91 994-438-7062
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item size={{ lg: 2, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#000"
                    fontWeight="bold"
                  >
                    nationality:
                  </Typography>
                </Grid>
                <Grid item size={{ lg: 4, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#788ea7"
                    fontWeight="bold"
                  >
                    indian
                  </Typography>
                </Grid>
                <Grid item size={{ lg: 2, md: 6, sm: 6, xs: 12 }}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#000"
                    fontWeight="bold"
                  >
                    email:
                  </Typography>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Typography
                    variant="caption"
                    textTransform="uppercase"
                    color="#788ea7"
                    fontWeight="bold"
                  >
                    s.perumal2013@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </PersonalDetails>
          </Grid>
        </Grid>
      </AboutContent>
    </Container>
  );
}

export default About;
