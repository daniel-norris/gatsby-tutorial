import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import Project from '../components/Project'
import Contact from '../components/Contact'
import FeaturedPosts from '../components/FeaturedPost'

export default ({ data }) => {
    return (
        <Layout>
            <Hero content={data.hero.edges} />
            <About content={data.about.edges} />
            <Project content={data.project.edges} />
            <FeaturedPosts content={data.featured.edges} />
            <Contact content={data.contact.edges} />
        </Layout>
    )
}

export const pageQuery = graphql`
    {
        featured: allMdx(
            filter: {
                fileAbsolutePath: { regex: "/posts/" }
                frontmatter: { published: { eq: true }, featured: { eq: true } }
            }
            sort: { order: DESC, fields: frontmatter___date }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "Do MMM")
                        title
                    }
                    excerpt(pruneLength: 100)
                    id
                    body
                    timeToRead
                }
            }
        }
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
        project: allMdx(
            filter: {
                fileAbsolutePath: { regex: "/project/" }
                frontmatter: { visible: { eq: "true" } }
            }
            sort: { fields: [frontmatter___position], order: ASC }
        ) {
            edges {
                node {
                    body
                    frontmatter {
                        title
                        visible
                        tags
                        position
                        github
                        external
                        category
                        screenshot {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        contact: allMdx(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
            edges {
                node {
                    frontmatter {
                        title
                        callToAction
                    }
                    body
                }
            }
        }
    }
`
