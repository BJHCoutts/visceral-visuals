import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
// import { useScrollPosition } from '@n8tb1t/use-scroll-position'
// import { useScrollPosition } from './shared/use-scroll-position'

import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { NavBar } from './nav-bar/nav-bar'
import { GlobalStyle } from "../styles/global"
import { ContextProvider } from "./context/context"
import { Gears } from "./gears/gears"

export const Layout:React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      bgImage: file(relativePath: {eq: "pinkInkFaded.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const bgImagePath = data.bgImage.childImageSharp.fluid

  // const scrollTo = (id:string) => {
  //   const el = document.getElementById(id)
  //   if (el) {
  //     el.scrollIntoView({behavior:"smooth", block:"center"})
  //   }
  // }
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
    <ContextProvider>
      <GlobalStyle/>
      <ParallaxBgImg fluid={bgImagePath} >
        <Gears />
        <Header />
        <NavBar />
        <LayoutContainer >
          <Content>{children}</Content>
          <Footer />
        </LayoutContainer>
      </ParallaxBgImg>
    </ContextProvider>
  )
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
  background-image: linear-gradient(90deg, hsla( 0, 0%, 100%, .2), hsla( 0, 0%, 100%, 1), hsla( 0, 0%, 100%, .3));
`

const ParallaxBgImg = styled(BackgroundImage)`
background-attachment: fixed;
min-height: 100vh;
`