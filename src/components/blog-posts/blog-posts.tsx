import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document } from "@contentful/rich-text-types"

import { Card } from "../shared/card"

type ContenfulBlogPost = {
  node: {
    title: string
    category: string
    slug: string
    entry: { json: Document }
  }
}

export const BlogPosts = () => {
  const {
    allContentfulBlogPost: { edges: postEdges },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
            category
            title
            entry {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      {postEdges.map(
        ({ node: { title, category, entry, slug } }: ContenfulBlogPost) => {
          return (
            <Link to={slug}>
              <Card width="100%" key={title}>
                <Catagory>{category}</Catagory>
                <Title>{title}</Title>
                <BodyText>{documentToReactComponents(entry.json)}</BodyText>
              </Card>
            </Link>
          )
        }
      )}
    </Container>
  )
}

const Catagory = styled.h2`
  font: 1.1rem/1.5rem var(--body-font);
  margin-bottom: 1rem;
`

const Container = styled.div`
  grid-column: 2;
  margin-bottom: 25px;
`

const Title = styled.h1`
  font: 2rem/2rem var(--display-font);
  margin-bottom: 1.2rem;
`

const BodyText = styled.div`
  font: 0.9rem/1.2rem var(--body-font);
  margin-left: 1rem;
`
