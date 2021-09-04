import React from "react";
import Skeletons from "./Skeletons";
import VideoCard from "./VideoCard";

const VideoList = ({ oneColumn, videos }) => {
  return (
    <div
      className={`row gy-4  ${
        oneColumn
          ? "row-cols-1"
          : "row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
      }`}
    >
      {videos.length ? (
        videos.map((video) => (
          <div className="cols" key={video.id}>
            <VideoCard
              image={video.thumbnail}
              title={video.title}
              channelTitle={video.channelTitle}
              id={video.id}
            />
          </div>
        ))
      ) : (
        <Skeletons length={10} height={["195px", "40px", "10px"]} />
      )}
    </div>
  );
};

export default VideoList;
