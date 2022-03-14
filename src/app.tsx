import React from 'react'
import { hot } from 'react-hot-loader/root';
import { css } from '@emotion/react'

const textStyle = css`
    color: red
`;

const App = () => {
    return (
        <>
            <span css={textStyle}>this is theee app</span>
        </>
    )
}

export default hot(App);