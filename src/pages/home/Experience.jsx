import React from "react";
import styled from "@emotion/styled";
import { Container, Typography, Grid } from "@mui/material";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { getDateDiff } from "../../utils";

const ExperienceSection = styled.div`
  padding: 50px 0;
  background-color: #ecf1f7;
`;

const Experiences = styled.div`
  padding: 50px 0;
  background-color: #ecf1f7;
`;

const ExperienceItem = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0px 25px 10px rgb(0 0 0 / 9%);
  margin-bottom: 30px;
  border-radius: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const EXPERIENCES = [
  {
    company: "SRS Global Technologies",
    companyLink: "https://srsglobaltechnologies.com/",
    location: "Thiruvanthapuram, Tamil Nadu, India",
    designation: "Software Developer",
    skills:
      "React Js · Redux Tool kit · TypeScript · Wordpress · Agile Methodologies · Jira · HTML · Cascading Style Sheets (CSS) · JavaScript ",
    responsibility:
      "I work with the Front-End Team and Build Web and Mobile applications with Clean and Bug free code. During the development, we followed Agile methodology and Jira Dashboard for the activity tracking. And closely worked with Design and Testing team to understand the application flow and find the root cause of the issues.",
    from: "June 2024",
    to: "Mar 2025",
  },
  {
    company: "Converge 2 Digital",
    companyLink: "https://www.linkedin.com/company/converge2digital/",
    location: "Chennai, Tamil Nadu, India",
    designation: "Senior Software Developer",
    skills:
      "React Js · HTML · Cascading Style Sheets (CSS) · JavaScript · TypeScript · Adobe XD to UI . WordPress . PHP",
    responsibility:
      "Build enterprise application for Digital marketing team to Converge 2 Digital. Planned the structure and designed the web application prototypes; Developed components and features that can enhance the user experience; Integrated the dynamic data by APIs. Followed Waterfall Method for the project tracking.",
    from: "Mar 2023",
    to: "Mar 2024",
  },
  {
    company: "Comorins Technologies",
    companyLink:
      "https://www.linkedin.com/company/comorins/?originalSubdomain=in",
    location: "Nagercoil, Tamil Nadu, India",
    designation: "Frontend Developer",
    skills:
      "WordPress · React Js · HTML · Cascading Style Sheets (CSS) · JavaScript · Adobe XD to UI conversion · Git ",
    responsibility:
      "Supported the team to create prototypes, UI Development,frontend development,WordPress development and Lead for PSD to UI development Team",
    from: "Oct 2020",
    to: "Mar 2023",
  },
  {
    company: "Veltech Digital Team",
    companyLink: "https://www.veltech.edu.in/",
    location: "Chennai, Tamil Nadu, India",
    designation: "Web Developer",
    skills:
      "HTML · Cascading Style Sheets (CSS) · JavaScript · Photoshop . WordPress . PHP",
    responsibility:
      "Build enterprise application for Education Platform. Create and Manage CMS websites using WordPress, web applications in FullStack. Manage the front-end team. Some of the general responsibilities are, Worked closely with design and testing team. Focused in bug free production code and eye catching UI visualisation. Managed individual project priorities, deadlines and deliverables.",
    from: "Mar 2017",
    to: "Jun 2020",
  },
];

function Experience() {
  return (
    <ExperienceSection>
      <Container maxWidth="xl">
        <Typography
          textTransform="uppercase"
          variant="h5"
          fontWeight="bold"
          gutterBottom
        >
          experience
        </Typography>

        <Experiences>
          {EXPERIENCES.map((experience, index) => (
            <ExperienceItem key={index}>
              <Grid container>
                <Grid
                  item
                  size={{ lg: 3, xs: 12 }}
                  sx={{ padding: { lg: 4, xs: 3 }, backgroundColor: "#fdd65c" }}
                >
                  <Typography
                    textTransform="uppercase"
                    variant="body1"
                    fontSize={13}
                    color="#666"
                  >
                    from
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    fontSize={14}
                    marginBottom={1}
                    color="#333"
                    gutterBottom
                  >
                    {experience.from}
                  </Typography>
                  <Typography
                    textTransform="uppercase"
                    variant="body1"
                    fontSize={13}
                    color="#666"
                    gutterBottom
                  >
                    experience
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    fontSize={16}
                    color="#333"
                    gutterBottom
                  >
                    {experience.to}
                  </Typography>

                  <Typography
                    variant="body1"
                    fontSize={13}
                    color="#666"
                    marginBottom={4}
                    gutterBottom
                  >
                    ({getDateDiff(experience.from, experience.to)})
                  </Typography>

                  <Typography
                    textTransform="capitalize"
                    variant="h6"
                    fontWeight="bold"
                    color="#333"
                  >
                    <a
                      href={experience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.company}{" "}
                      <OpenInNewIcon style={{ verticalAlign: "middle" }} />
                    </a>
                  </Typography>
                  <Typography
                    textTransform="capitalize"
                    variant="body1"
                    fontSize={13}
                    color="#666"
                    gutterBottom
                  >
                    {experience.location}
                  </Typography>
                </Grid>
                <Grid
                  item
                  size={{ lg: 9, xs: 12 }}
                  sx={{ padding: { lg: 4, xs: 3 } }}
                >
                  <Typography
                    textTransform="capitalize"
                    variant="h5"
                    fontWeight="bold"
                    marginBottom={2}
                    gutterBottom
                  >
                    {experience.designation}
                  </Typography>
                  <Typography gutterBottom>
                    <Typography
                      textTransform="capitalize"
                      variant="p"
                      fontWeight="bold"
                      color="#333"
                    >
                      used skills:{" "}
                    </Typography>
                    <Typography variant="p" color="#666">
                      {experience.skills}
                    </Typography>
                  </Typography>
                  <Typography gutterBottom>
                    <Typography
                      textTransform="capitalize"
                      variant="p"
                      fontWeight="bold"
                      color="#333"
                    >
                      Responsibility:{" "}
                    </Typography>
                    <Typography variant="p" color="#666">
                      {experience.responsibility}
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </ExperienceItem>
          ))}
        </Experiences>
      </Container>
    </ExperienceSection>
  );
}

export default Experience;
