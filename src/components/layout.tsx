import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, {keyframes} from "styled-components"
import BackgroundImage from 'gatsby-background-image'
import { breakPoints } from "./shared/break-points"
// import { useScrollPosition } from '@n8tb1t/use-scroll-position'
// import { useScrollPosition } from './shared/use-scroll-position'

import Footer from "./footer/"
import Header from "./header/"

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

  const scrollTo = (id:string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({behavior:"smooth", block:"center"})
    }
  }
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
      <ParallaxBgImg fluid={bgImagePath} >
      <Header />
        <NavBar>
          <NavList>
            <NavItem onClick={() => scrollTo("images")}>Images</NavItem>
            <NavItem onClick={() => scrollTo("websites")}>Websites</NavItem>
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

const LayoutContainer = styled.div`
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
  font: 400 1.5rem/2rem var(--display-font);
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