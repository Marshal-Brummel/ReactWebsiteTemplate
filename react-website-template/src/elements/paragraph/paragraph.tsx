import React, { CSSProperties } from 'react';
import './paragraph.css';

interface Props {
    text: string,
    classNames?: string
    style?: CSSProperties
}

const Paragraph = ({ text, classNames, style }: Props) => {
    return(
        <p className={classNames} style={style}>{text}</p>
    )
}

export default Paragraph