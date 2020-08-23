import React from 'react'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { navLinks } from '../config/index'

const Hero = ({ content }) => {
    const { frontmatter, body } = content[0].node
    const { button } = navLinks

    return (
        <div className="flex items-center bg-pattern shadow-inner min-h-screen">
            <div className="bg-white w-full py-6 shadow-lg">
                <section class="mx-auto container w-4/5">
                    <h1 className="uppercase font-bold text-lg text-red-500">
                        {frontmatter.intro}
                    </h1>
                    <h2 className="font-bold text-6xl">{frontmatter.title}</h2>
                    <p className="font-thin text-2xl w-3/5">
                        <MDXRenderer>{body}</MDXRenderer>
                    </p>

                    <Link to={button.url}>
                        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mt-6">
                            {button.name}
                        </button>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Hero
