import React, { Fragment } from "react";
import generationPath from "../../utils/utils";

const AvatarComponent = ({ arrStyle, randomNumber }) => {
  return (
    <Fragment>
      <div className="character">
        {arrStyle?.map((item, index) => {
          return (
            <Fragment key={index}>
              <img
                className="character-image"
                src={
                  process.env.PUBLIC_URL +
                  generationPath(item.partName, item.activePart)
                }
                alt={item.partName}
                style={{ zIndex: index }}
              />
            </Fragment>
          );
        })}
      </div>
      <button className="btn btn-random" onClick={() => randomNumber()}>
        ramdomize!
      </button>
    </Fragment>
  );
};

export default AvatarComponent;
