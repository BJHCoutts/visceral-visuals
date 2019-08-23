import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Layout } from "../components/layout"

interface Props {
  data: {
    contentfulBlogPost: {
      category: string
      title: string
      entry: {
        json: any
      }
    }
  }
}

const BlogPost = (props: Props) => {
  const { contentfulBlogPost } = props.data

  return (
    <Layout>
      <Main>
        <ProductName>{contentfulBlogPost.title}</ProductName>
        <Category>{contentfulBlogPost.category}</Category>
        <Description>
          {documentToReactComponents(contentfulBlogPost.entry.json)}
        </Description>
      </Main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      category
      title
      entry {
        json
      }
    }
  }
`

const Category = styled.h2`
  font-size: 1.8rem;
  text-align: left;
  margin-bottom: 1.25rem;
`

const Description = styled.div`
  max-width: 400px;
  margin: 0 auto;
`

const Main = styled.div`
  grid-column: 2;
  margin: 0 auto;
  padding: 4rem 1rem 4rem 1rem;
`

const ProductName = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`

export default BlogPost
