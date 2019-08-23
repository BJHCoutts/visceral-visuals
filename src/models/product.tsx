import { useStaticQuery, graphql } from "gatsby"

const data = useStaticQuery(graphql`
  query {
    allContentfulProduct(sort: { fields: name, order: ASC }) {
      edges {
        node {
          name
          slug
          image {
            file {
              url
            }
            fixed(height: 200) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`)

interface ProductFields {
  name: string
  imageURL: string
  description: string
  slug: string
}

class Product {
  constructor(public fields: ProductFields) {}
}

export const products = data.allContentfulProducts.edges.map(
  (product: Object) => {
    console.log(product)
    return new Product(
      product.node.name,
      product.node.imageURL,
      product.node.description,
      product.node.slug
    )
  }
)
