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

  const [ sticky, setSticky ] = React.useState(false)
  const [ open, setOpen ] = React.useState(false)
  // const [ logoHeight, setLogoHeight] = React.useState('300')

  const toggleOpen = () => {
    setOpen(!open)
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
      // const isShow = currPos.y > prevPos.y
      const isShow = currPos.y > prevPos.y
      if (isShow !== sticky) setSticky(isShow)
    },
    [sticky],
    false,
    false,
    300
  )

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <ParallaxBgImg fluid={bgImagePath} >
        <HeaderContainer sticky={sticky}>
          {/* <HeaderContent>
                <LogoImg src={VVLogo} />
          </HeaderContent> */}
        </HeaderContainer>

        <LayoutContainer >
          <TestDiv open={open}>
            doop doop doop
          </TestDiv>
          <button onClick={toggleOpen}>test Button</button>
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
position: sticky;
top: 0;
left: 0;
right: 0;
z-index: 5;
display: grid;
grid-template-columns: var(--grid);
background: red;
height:500px;
max-height: ${ (props) => props.sticky ? '300px' : '50px'};
transition: all 0.5s;
`

const HeaderContent = styled.div`
display: relative;
grid-column: 2;
`

const LayoutContainer = styled.div`
  height: 100%;
`

const LogoImg = styled.img`
height: 100%;
/* animation: ${fadeIn} 1s ease-in; */
transition: transform 2s ease-in, opacity 1s ease-in;
transform-origin: 0% 0%;
@media (min-width: ${breakPoints.tablet}){
}
`

const ParallaxBgImg = styled(BackgroundImage)`
background-attachment: fixed;
min-height: 100vh;
`

const TestDiv = styled.div`
  border: 1px solid gray;
  border-top: none;
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: ${props => (props.open ? "15px" : "0 15px")};
  transition: all 0.3s;
`