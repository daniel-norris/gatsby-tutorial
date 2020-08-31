import React from 'react'
import { Link } from 'gatsby'

const Posts = ({ content }) => {
    return (
        <section
            id="blog"
            className="mt-6 flex flex-col mx-auto container w-3/5"
            style={{ marginBottom: '10rem' }}
        >
            <h3 className="text-3xl sm:text-5xl font-bold mb-6">All Posts</h3>

            {content.map((posts, key) => {
                const {
                    excerpt,
                    id,
                    body,
                    frontmatter,
                    timeToRead,
                    fields,
                } = posts.node

                return (
                    <Link to={fields.slug}>
                        <section
                            className="flex items-center justify-between mt-8"
                            key={id}
                        >
                            <div>
                                <p className="text-xs sm:text-sm font-bold text-gray-500">
                                    {frontmatter.date}
                                    <span className="sm:hidden">
                                        {' '}
                                        &bull; {timeToRead} min read
                                    </span>
                                </p>
                                <h1 className="text-lg sm:text-2xl font-bold">
                                    {frontmatter.title}
                                </h1>
                                <p className="text-sm sm:text-lg font-light">
                                    {excerpt}
                                </p>
                            </div>
                            <p className="hidden sm:block text-sm font-bold text-gray-500">
                                {timeToRead} min read
                            </p>
                        </section>
                    </Link>
                )
            })}
        </section>
    )
}

export default Posts
