import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					My Portfolio
				</SectionTitle>
				<SectionText>I'm a full stack developer</SectionText>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
