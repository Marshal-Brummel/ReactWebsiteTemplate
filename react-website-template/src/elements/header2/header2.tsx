import React, { CSSProperties } from 'react';
import './paragraph.css';

interface Props {
    text: string,
    classNames?: string
    style?: CSSProperties
}

const Header2 = ({ text, classNames, style }: Props) => {
    return(
        <h2 className={classNames} style={style}>{text}</h2>
    )
}

export default Header2