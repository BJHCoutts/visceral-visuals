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
  // return <Helmet 
  //   title={`${props.title} | ${data.site.siteMetadata.title}`} 
  //   link={[ { rel: "shortcut icon", type: "image/png", href: `${faviconPath}` },
    
  // ]}/>
  return(
    <Helmet>
      {/* General tags */}
      <title>
        {`${props.title} | ${data.site.siteMetadata.title}`}
      </title>
      <link rel="shortcut icon" type="image/png" href={`${faviconPath}`} />
      {/* <meta name="description" content={description} />
      <meta name="image" content={image} />
      <link rel="canonical" href={url} /> */}
      <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>
   
      {/* OpenGraph tags */}
      {/* <meta property="og:url" content={url} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

      {/* Twitter Card tags */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> */}
    </Helmet>
  )

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