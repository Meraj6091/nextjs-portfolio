import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { BsCodeSlash } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { SiStrapi } from "react-icons/si";

import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider divider />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I've worked with a range of technologies in the web development and Mobile
			development world, From Back-end To Design!
		</SectionText>
		<List>
			<ListItem>
				<picture>
					<DiReact size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experiece with <br />
						React.js <br />
						Next.js
						<br />
						React Native
						<br />
						JavaScript
						<br />
						TypeScript
						<br />
						SCSS
						<br />
						Tailwind CSS
						<br />
						Bootstrap
						<br />
						HTML5
						<br />
						Redux
						<br />
						Redux-Saga
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<BsCodeSlash size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node.js <br />
						Express.js
						<br />
						Python <br />
						Java
						<br />
						Spring Boot <br />
						Microservices
						<br />
						Git
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiFirebase size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>Databases</ListTitle>
					<ListParagraph>
						Experience with
						<br />
						PostgreSQL
						<br />
						MySQL
						<br />
						MongoDB
						<br />
						Firebase
						<br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<FaLaptopCode size="3rem" />
				</picture>
				<ListContainer>
					<ListTitle>OS</ListTitle>
					<ListParagraph>
						Experience with
						<br />
						Windows
						<br />
						Linux
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<SiStrapi size="2.5rem" />
				</picture>
				<ListContainer>
					<ListTitle>APIs</ListTitle>
					<ListParagraph>
						Experience with
						<br />
						Google Maps APi
						<br />
						Mapbox
						<br />
						Slack
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider colorAlt />
	</Section>
);

export default Technologies;
