import React, { Fragment } from "react";
import generationPath from "../../utils/utils";

const PartComponent = ({ part, changeStyle }) => {
  return (
    <div style={{ padding: "10px" }} class="item-part">
      <h1 className="title-part">{part.partName}</h1>
      {Array.from(Array(part?.value).keys())?.map((index) => {
        const isActive = part.activePart === index + 1;
        const className = `image-part ${isActive ? "active" : ""}`;
        return (
          <Fragment key={index}>
            <span
              className={className}
              onClick={() => changeStyle(part.partName, index + 1)}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  generationPath(part.partName, index + 1)
                }
                alt={part.partName}
              />
            </span>
          </Fragment>
        );
      })}
    </div>
  );
};

export default PartComponent;
