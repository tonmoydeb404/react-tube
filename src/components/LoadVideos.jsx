import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearVideos,
  getPopulerVideos,
  getSearchedVideos,
} from "../services/actions/videoAction";
import VideoList from "./VideoList";

const LoadVideos = () => {
  const homeRef = useRef(null);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const { videos } = useSelector((state) => state.getVideo);

  useEffect(() => {
    if (search) {
      dispatch(getSearchedVideos(search));
      homeRef.current.scrollIntoView();
    } else {
      dispatch(getPopulerVideos());
    }

    // CLEAN UP
    return () => {
      dispatch(clearVideos());
    };
  }, [search]);

  return (
    <div className="py-5" ref={homeRef}>
      <VideoList oneColumn={false} videos={videos} />
    </div>
  );
};

export default LoadVideos;
