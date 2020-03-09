import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'


import { Footer } from "./footer"
import { Header } from "./header/header"

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

  return (
    <LayoutContainer>
      <ParallaxBgImg fluid={bgImagePath} style={{height: "100%"}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>{children}</Content>
      <Footer />
    </ParallaxBgImg>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Content = styled.div`
  display: grid;
  grid-template-columns: var(--grid);
`

const LayoutContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
`

const ParallaxBgImg = styled(BackgroundImage)`
  background-attachment: fixed;
  position: relative;
  height: 100%;
  /* &::after{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateZ(-1px) scale(1.5);
    z-index: -1; */
  }
`