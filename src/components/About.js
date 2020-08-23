import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'

const About = ({ content }) => {
    const { frontmatter, body } = content[0].node

    return (
        <section id="about" className="my-6 mx-auto container w-4/5 sm:w-3/5">
            <h3 className="text-3xl font-bold mb-6">{frontmatter.title}</h3>
            <div className="flex flex-col sm:flex sm:flex-row font-light text-lg flex justify-between">
                <div className="sm:w-1/2">
                    <MDXRenderer>{body}</MDXRenderer>
                </div>
                <div className="order-first sm:order-last sm:w-1/2">
                    <figure className="w-2/3 mx-auto">
                        <Img fluid={frontmatter.image.childImageSharp.fluid} />
                        <figurecaption className="text-sm">
                            {frontmatter.caption}
                        </figurecaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default About
