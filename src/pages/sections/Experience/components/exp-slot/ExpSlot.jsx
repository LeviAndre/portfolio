import React from "react";

function ExpSlot({ imgSrc, corpText, jobText, startedAt, endedAt = "Atual", description, icons }) {

    return(
        <>
            <div className="exp-container">
                <div className="col-1">
                    <img src={imgSrc} className="exp-icon" alt="" />
                </div>

                <div className="px-4 col-11">
                    <div className="d-flex justify-content-between">
                        <b className="textoP">{corpText} | {jobText}</b> <p className="textoP text-secondary">{startedAt} - {endedAt}</p>
                    </div>


                    <p className="textoP">
                        {description}
                    </p>
                </div>

                <div className="w-100 d-flex justify-content-end">
                {icons && icons.map((icon, index) => (
                    <img key={index} src={icon} alt="" className="tech-icon" />
                ))}
                </div>
            </div>
        </>
    )
}

export default ExpSlot;