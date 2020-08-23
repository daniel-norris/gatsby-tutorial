import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'

export default ({ data }) => {
    return (
        <Layout>
            <Hero content={data.hero.edges} />
            <About content={data.about.edges} />
        </Layout>
    )
}

export const pageQuery = graphql`
    {
        hero: allMdx(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
            edges {
                node {
                    body
                    frontmatter {
                        intro
                        title
                    }
                }
            }
        }
        about: allMdx(filter: { fileAbsolutePath: { regex: "/about/" } }) {
            edges {
                node {
                    body
                    frontmatter {
                        title
                        caption
                        image {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
