import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default ({ data }) => {
    return (
        <Layout>
            <Hero content={data.hero.edges} />
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
    }
`
