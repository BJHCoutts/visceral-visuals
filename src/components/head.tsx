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
  return <Helmet 
    title={`${props.title} | ${data.site.siteMetadata.title}`} 
    link={[ { rel: "shortcut icon", type: "image/png", href: `${faviconPath}` },
    
  ]}/>

}

// <!-- Basic -->
// <meta property="og:title" content="What I Learned from a Failed Startup">
// <meta property="og:description" content="Four lessons I learned from working as an engineer for a startup that ran out of cash and went bankrupt.">
// <meta property="og:url" content="https://thetrevorharmon.com/blog/what-I-learned-from-a-failed-startup/">
// <meta property="og:image" content="https://thetrevorharmon.com/favicon.png" />

// <!-- Additional -->
// <meta property="og:type" content="website" />
// <meta property="og:site_name" content="The Trevor Harmon">

// <!-- Twitter -->
// <meta property="twitter:card" content="summary" />
// <meta name="twitter:site" content="@thetrevorharmon">
// <meta name="twitter:creator" content="@thetrevorharmon">