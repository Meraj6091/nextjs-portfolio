import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>CV</LinkTitle>
					<LinkItem href="Meraj Vindira - CV.pdf" download>
						Download My CV
					</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href="tel:+94769482288">+94 769482288</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:merajvindira2000@gmail.com">
						merajvindira2000@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer />
				<SocialContainer>
					<SocialIcons href="https://github.com/Meraj6091">
						<AiFillGithub size="3rem" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/meraj-vindira-169193197/">
						<AiFillLinkedin size="3rem" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
