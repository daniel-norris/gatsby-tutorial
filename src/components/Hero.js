import React from 'react'
import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { navLinks } from '../config/index'
import { motion } from 'framer-motion'

const Hero = ({ content }) => {
    const { frontmatter, body } = content[0].node
    const { button } = navLinks

    const variants = {
        hidden: {
            opacity: 0,
            x: -10,
        },
        display: {
            opacity: 1,
            x: 0,
        },
    }

    return (
        <div className="flex items-center bg-pattern shadow-inner min-h-screen">
            <div className="bg-white w-full py-6 shadow-lg">
                <section class="mx-auto container w-4/5 sm:w-3/5">
                    <motion.h1
                        className="uppercase font-bold text-lg text-red-500"
                        variants={variants}
                        initial="hidden"
                        animate="display"
                        transition={{ delay: 0.6 }}
                    >
                        {frontmatter.intro}
                    </motion.h1>
                    <motion.h2
                        className="font-bold text-6xl"
                        variants={variants}
                        initial="hidden"
                        animate="display"
                        transition={{ delay: 0.8 }}
                    >
                        {frontmatter.title}
                    </motion.h2>
                    <motion.p
                        className="font-thin text-2xl sm:w-4/5"
                        variants={variants}
                        initial="hidden"
                        animate="display"
                        transition={{ delay: 1 }}
                    >
                        <MDXRenderer>{body}</MDXRenderer>
                    </motion.p>

                    <Link to={button.url}>
                        <motion.button
                            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mt-6"
                            variants={variants}
                            initial="hidden"
                            animate="display"
                            transition={{ delay: 1.2 }}
                        >
                            {button.name}
                        </motion.button>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default Hero
