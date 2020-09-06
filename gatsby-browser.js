import './src/css/index.css'

import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import theme from 'prism-react-renderer/themes/vsDark'
import Highlight, { defaultProps } from 'prism-react-renderer'

const components = {
    pre: (props) => {
        const className = props.children.props.className || ''
        const matches = className.match(/language-(?<lang>.*)/)

        return (
            <Highlight
                {...defaultProps}
                code={props.children.props.children.trim()}
                language={
                    matches && matches.groups && matches.groups.lang
                        ? matches.groups.lang
                        : ''
                }
                theme={theme}
            >
                {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                }) => (
                    <pre className={`${className} p-4 rounded`} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        )
    },
}

export const wrapRootElement = ({ element }) => {
    return <MDXProvider components={components}>{element}</MDXProvider>
}
