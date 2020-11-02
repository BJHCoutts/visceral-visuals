import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import faviconPath from '../icons/favicon.ico'

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
  return <Helmet title={`${props.title} | ${data.site.siteMetadata.title}`} link={[
    { rel: "shortcut icon", type: "image/png", href: `${faviconPath}` },
  ]}/>

}