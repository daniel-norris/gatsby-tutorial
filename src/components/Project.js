import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Icon from '../components/icons/index'
import Img from 'gatsby-image'

const Project = ({ content }) => {
    return (
        <section id="projects" className="my-8 w-4/5 md:w-3/5 mx-auto">
            {content.map((project, key) => {
                const { body, frontmatter } = project.node

                return (
                    <div className="py-8 md:flex" key={frontmatter.position}>
                        <div className="md:w-1/3 mr-4">
                            <h1 className="text-xs font-bold uppercase text-red-500">
                                {frontmatter.category}
                            </h1>
                            <h2 className="text-3xl font-bold mb-6">
                                {frontmatter.title}
                            </h2>
                            <div className="md:hidden">
                                <Img
                                    fluid={
                                        frontmatter.screenshot.childImageSharp
                                            .fluid
                                    }
                                />
                            </div>
                            <div className=" font-light text-lg flex justify-between">
                                <div>
                                    <MDXRenderer>{body}</MDXRenderer>
                                    <div className="flex text-sm font-bold text-red-500 ">
                                        {frontmatter.tags.map((tag, key) => {
                                            return (
                                                <p className="mr-2 mt-6">
                                                    {tag}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <div className="flex mt-4">
                                        <a
                                            href={frontmatter.github}
                                            className="w-8 h-8 mr-4"
                                        >
                                            <Icon name="github" />
                                        </a>
                                        <a
                                            href={frontmatter.external}
                                            className="w-8 h-8"
                                        >
                                            <Icon name="external" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block w-full py-6">
                            <Img
                                fluid={
                                    frontmatter.screenshot.childImageSharp.fluid
                                }
                            />
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Project
