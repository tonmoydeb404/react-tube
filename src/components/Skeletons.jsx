import React from "react";
import Skeleton from "react-loading-skeleton";

const Skeletons = ({ height, length, className }) => {
  return (
    <>
      {new Array(length || 1).fill("skeleton").map((_) => {
        return (
          <div className={className} key={Math.random()}>
            <Skeleton height={height[0]} width={"100%"} />
            <Skeleton height={height[1]} width={"100%"} />
            <Skeleton height={height[2]} width={"100%"} />
          </div>
        );
      })}
    </>
  );
};

export default Skeletons;
