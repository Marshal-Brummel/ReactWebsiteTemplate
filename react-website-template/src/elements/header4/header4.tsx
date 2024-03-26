import React, { CSSProperties } from 'react';
import './paragraph.css';

interface Props {
    text: string,
    classNames?: string
    style?: CSSProperties
}

const Header4 = ({ text, classNames, style }: Props) => {
    return(
        <h4 className={classNames} style={style}>{text}</h4>
    )
}

export default Header4