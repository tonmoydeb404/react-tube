import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearVideos,
  getRelatedVideos,
  removeSelectedVideo,
  selectVideo,
} from "../services/actions/videoAction";
import Skeletons from "./Skeletons";
import VideoList from "./VideoList";

const VideoView = () => {
  const videoRef = useRef(null);
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.getVideo);
  const { video } = useSelector((state) => state.selectVideo);
  const { id } = useParams();

  useEffect(() => {
    videoRef.current.scrollIntoView();

    if (id && id.length) {
      dispatch(selectVideo(id));
      dispatch(getRelatedVideos(id));
    }

    // CLEANUP VIDEOS
    return () => {
      dispatch(clearVideos());
      dispatch(removeSelectedVideo());
    };
  }, [id]);

  return (
    <div ref={videoRef} className="row py-5 justify-content-center">
      <div className="col-11 col-md-10 col-lg-9 ">
        {Object.keys(video).length ? (
          <div className="card">
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title=""
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card-body">
              <h2 className="card-title h4">{video.title}</h2>
              <small className="text-muted mb-5 d-block">
                {video.channelTitle}
              </small>

              <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
                {video.description}
              </p>
            </div>
          </div>
        ) : (
          <Skeletons height={["500px", "100px", "300px"]} />
        )}
      </div>

      <div className="col-9 col-md-8 col-lg-3 mt-5 mt-lg-0">
        <VideoList oneColumn={true} videos={videos} />
      </div>
    </div>
  );
};

export default VideoView;
