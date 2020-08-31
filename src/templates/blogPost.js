import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../components/Layout'

export default ({ data }) => {
    const { frontmatter, body, timeToRead } = data.mdx

    console.log(timeToRead)

    return (
        <Layout>
            <section
                className="w-2/4 my-8 mx-auto container"
                style={{ minHeight: '80vh' }}
            >
                <h1 className="text-3xl sm:text-5xl font-bold">
                    {frontmatter.title}
                </h1>
                <div className="flex justify-between">
                    <p className="text-base text-gray-600">
                        {frontmatter.date}
                    </p>
                    <p className="text-base text-gray-600">
                        {timeToRead} min read
                    </p>
                </div>
                <div className="mt-8 text-base font-light">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
            </section>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            timeToRead
            frontmatter {
                title
                date(formatString: "Do MMM YYYY")
            }
        }
    }
`
