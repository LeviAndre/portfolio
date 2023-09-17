import React from "react";

function ExpSlot({ isMobile, imgSrc, corpText, jobText, startedAt, endedAt = "Atual", description, icons }) {

    return(
        <>
            <div className="exp-container">
                <div className="col-xxl-1 col-xl-1 col-2">
                    <img src={imgSrc} className="exp-icon" alt="" />
                </div>

                <div className="px-4 col-xxl-11 col-xl-11 col-10">
                    <div className="d-flex flex-wrap justify-content-between mb-2">
                        <b className="textoP col-xxl-10 col-xl-10 col-12">{corpText} | {jobText}</b> <p className="textoP text-secondary col-xxl-2 col-xl-2 col-12">{startedAt} - {endedAt}</p>
                    </div>

                    {isMobile == false && (
                        <p className="textoP">
                            {description}
                        </p>
                    )}
                </div>

                {isMobile == true && (
                        <p className="textoP col-12">
                            {description}
                        </p>
                )}

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