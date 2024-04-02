import React, { CSSProperties } from 'react';
import './paragraph.css';

interface Props {
    text: string,
    classNames?: string
    style?: CSSProperties
}

const Header1 = ({ text, classNames, style }: Props) => {
    return(
        <h1 className={classNames} style={style}>{text}</h1>
    )
}

export default Header1