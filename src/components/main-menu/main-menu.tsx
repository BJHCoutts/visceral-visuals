import React from "react";
import styled from 'styled-components'

import { SectionContainer, SectionContent } from "../shared/containers";
import { SubHeader, ExternalLink } from "../shared/type";
import { HeaderToggleButton } from "../shared/forms";
import { breakPoints } from "../shared/break-points";
import { CarouselContainer } from "../carousel/carousel-container";
import { Websites } from "../websites/websites";

export const MainMenu:React.FC = () => {

	return(
		<SectionContainer>
			<SectionContent>
          <Intro>
            I am a ʕ•́ᴥ•̀ʔっ♡ WIP site
          </Intro>
					<Menu>
            <MenuItem>
              <MainMenuSubHeader id="images">Image Galleries</MainMenuSubHeader>
              <CarouselContainer />
              <PrintPortfolioButton href="https://drive.google.com/file/d/1E8tXw5MDEH0-iQohUQ8bHegcbAUuVuKe/view?usp=sharing">
                <HeaderToggleButton>
                  Print Portfolio
                </HeaderToggleButton>
              </PrintPortfolioButton>
              <MainMenuSubHeader id="websites">Websites</MainMenuSubHeader>
              <Websites />
            </MenuItem>
					</Menu>
			</SectionContent>
		</SectionContainer>
	)
}

const Intro = styled.span`
  font: 700 1rem/0rem var(--body-font);
  color: var(--black);
  margin-bottom: -3em;
  @media (min-width: ${breakPoints.tablet}){
    font-size:1.2rem;
  }
`

const MainMenuSubHeader = styled(SubHeader)`
  padding-top: 3em;
`

const MenuItem = styled.li`
	font-size:2rem;
  margin-bottom: 1em;
  width: 100%;
`

const Menu = styled.ul`
  width: 100%;
`

const PrintPortfolioButton = styled(ExternalLink)`
  display: inline-block;
  margin-bottom: 1.5em;
  transition: font-size .3s ease-in;
  @media (min-width: ${breakPoints.tablet}){
    margin-bottom: 3em;
  }
  &:hover {
  }
`