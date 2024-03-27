import React from "react";
import AccordianSection from "./AccordianSection";

const Accordian = (data) => {
    return (
        <>
            <div>
                {data.map((item, i) => (
                    <AccordianSection section={item}></AccordianSection>
                ))}
            </div>
        </>
    )
}

export default Accordian
