import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Footer } from "./footer"
import { Header } from "./header/header"

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <LayoutContainer>
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
grid-template-rows: auto 1fr auto;
`