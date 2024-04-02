import React, { CSSProperties } from 'react';
import './paragraph.css';

interface Props {
    text: string,
    classNames?: string
    style?: CSSProperties
}

const Header3 = ({ text, classNames, style }: Props) => {
    return(
        <h3 className={classNames} style={style}>{text}</h3>
    )
}

export default Header3