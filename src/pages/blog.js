import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Post from '../components/Post'

const Blog = ({ data }) => {
    return (
        <Layout>
            <section
                className="w-3/5 mx-auto container mt-6 flex flex-col justify-center"
                style={{ minHeight: '60vh' }}
            >
                <h1 className="text-3xl sm:text-5xl font-bold mb-6">Blog</h1>
                <p className="font-light text-base sm:text-lg">
                    Arr aft topsail deadlights ho snow mutiny bowsprit long boat
                    draft crow's nest strike colors bounty lad ballast.
                </p>
            </section>
            <Post content={data.posts.edges} />
        </Layout>
    )
}

export default Blog

export const query = graphql`
    {
        posts: allMdx(
            filter: {
                fileAbsolutePath: { regex: "/posts/" }
                frontmatter: { published: { eq: true } }
            }
            sort: { order: DESC, fields: frontmatter___date }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    body
                    timeToRead
                    frontmatter {
                        title
                        date(formatString: "Do MMM")
                    }
                    id
                    excerpt(pruneLength: 100)
                }
            }
        }
    }
`
