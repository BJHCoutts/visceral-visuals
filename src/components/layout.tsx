import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, {keyframes} from "styled-components"
import BackgroundImage from 'gatsby-background-image'
import VVLogo from "../logos/GearsFeather.svg"
import { breakPoints } from "./shared/break-points"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
// import { useScrollPosition } from './shared/use-scroll-position'

import { Footer } from "./footer"

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      bgImage: file(relativePath: {eq: "pinkInk.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const bgImagePath = data.bgImage.childImageSharp.fluid

  // const [ sticky, setSticky ] = React.useState(false)
  // const [ open, setOpen ] = React.useState(false)
  // const [ logoHeight, setLogoHeight] = React.useState('300')

  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     // const isShow = currPos.y > prevPos.y
  //     // if (isShow !== sticky) setSticky(false)
  //     if (currPos.y < 150) setSticky(false)
  //     if (currPos.y > 150) setSticky(true)
  //   },
  //   [sticky]
  // )

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <ParallaxBgImg fluid={bgImagePath} >
        <HeaderContainer >
          <HeaderContent>
                <LogoImg src={VVLogo} />
          </HeaderContent>
        </HeaderContainer>
        <NavBar>
          <NavList>
            <NavItem>Images</NavItem>
            <NavItem>Websites</NavItem>
          </NavList>
        </NavBar>
        <LayoutContainer >
          <Content>{children}</Content>
          <Footer />
        </LayoutContainer>
      </ParallaxBgImg>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Content = styled.div`
  display: grid;
  grid-template-columns: var(--grid);
`

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: var(--grid);
`

const HeaderContent = styled.div`
  grid-column: 2;
`

const LayoutContainer = styled.div`
`

const LogoImg = styled.img`
max-width: 100%;
animation: ${fadeIn} 1s ease-in;
transform-origin: 0% 0%;
@media (min-width: ${breakPoints.tablet}){
}
`

const NavBar = styled.nav`
  background-color: var(--black);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: var(--grid);
  padding: 10px 0;
`

const NavItem = styled.li`
  color: var(--white);
  font: 400 2rem/2rem var(--display-font);
`

const NavList = styled.ul`
  grid-column:2;
  display: flex;
  justify-content: space-around;
`

const ParallaxBgImg = styled(BackgroundImage)`
background-attachment: fixed;
min-height: 100vh;
`