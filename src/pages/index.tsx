import * as React from "react"

import styled from "styled-components"

import { BlogPosts } from "../components/blog-posts/blog-posts"
import { Carousel } from "../components/carousel/carousel"
import { Head } from "../components/head"
import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { About } from "../components/about/about"
import { Follow } from "../components/follow/follow"
import { EmailSignup } from "../components/email-signup"
import { SearchBar } from "../components/search-bar"

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <Head title={"Index Page"} />
      <Layout>
        <Carousel />
        <MobileBodyContainer>
          <BlogPosts />
          <About />
          <Follow />
          <EmailSignup />
          <SearchBar />
        </MobileBodyContainer>

        <DesktopBodyContainer>
          <DesktopBody>
            <div>
              <BlogPosts />
            </div>
            <div>
              <About />
              <Follow />
              <EmailSignup />
              <SearchBar />
            </div>
          </DesktopBody>
        </DesktopBodyContainer>
      </Layout>
    </React.Fragment>
  )
}

const DesktopBody = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2rem;
  }
`
const DesktopBodyContainer = styled.div`
  @media (min-width: 768px) {
    grid-column: 2;
  }
`

const MobileBodyContainer = styled.div`
  grid-column: 2;
  @media (min-width: 768px) {
    display: none;
  }
`

export default IndexPage
