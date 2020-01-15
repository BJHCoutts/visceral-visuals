import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  title: string
}

export const Head: React.FC<Props> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <Helmet title={`${props.title} | ${data.site.siteMetadata.title}`} />
}
