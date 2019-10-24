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

export const Layout = ({ children }: Props) => {
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
      <BackgroundImage fluid={bgImagePath}></BackgroundImage>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>{children}</Content>
      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const Content = styled.div`
overflow-y: scroll;
display: grid;
grid-template-columns: var(--grid-columns);
`

const LayoutContainer = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: minmax(25px, 1fr) minmax(0, 768px) minmax(25px, 1fr);
`