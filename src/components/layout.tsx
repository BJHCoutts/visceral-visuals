import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { NavBar } from './nav-bar/nav-bar'
import { GlobalStyle } from "../styles/global"
import { ContextProvider } from "./context/context"
import { Gears } from "./gears/gears"
import { lightTheme, darkTheme } from "../styles/theme"

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
      bgImageDarkMode: file(relativePath: {eq: "pinkInkFadedReversed.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const bgImagePath = data.bgImage.childImageSharp.fluid
  const bgImageDarkModePath = data.bgImageDarkMode.childImageSharp.fluid

  const [ theme, setTheme ] = useState('light')

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme } >
      <ContextProvider>
        <GlobalStyle/>
        <ParallaxBgImg fluid={theme === 'light' ? bgImagePath : bgImageDarkModePath} >
          <Gears theme={theme}/>
          <Header theme ={theme} setTheme={setTheme} />
          <NavBar />
          <LayoutContainer >
            <Content>{children}</Content>
            <Footer />
          </LayoutContainer>
        </ParallaxBgImg>
      </ContextProvider>
    </ThemeProvider>
  )
}

const Content = styled.div`
  display: grid;
  grid-template-columns: var(--grid);
`

const LayoutContainer = styled.div`
  background-image: var(--gradient-colour-vertical);
`

const ParallaxBgImg = styled(BackgroundImage)`
background-attachment: fixed;
min-height: 100vh;
`