import React from "react";

import {
	Section,
	SectionDivider,
	SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
	{ number: 30, text: "Open Source Projects" },
	{ number: 20, text: "Github Followers" },
	{ number: 11, text: "Github Stars" },
	{ number: 1, text: "Google Hash Code - Team RunTimePirates 2021 " },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Achievements</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>
						{card.number === 1 ? `${card.number}` : `${card.number}+`}
					</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
		<SectionDivider />
	</Section>
);

export default Acomplishments;
