import {
  CLEAR_VIDEOS,
  GET_VIDEOS,
  GET_VIDEOS_FAILED,
  REMOVE_SELECTED_VIDEO,
  SELECT_VIDEO,
  SELECT_VIDEO_FAILED,
} from "../types";

const initVideos = {
  videos: [],
  errors: "",
};

export const getVideoReducer = (state = initVideos, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return { ...state, videos: action.payload };

    case CLEAR_VIDEOS:
      return {
        videos: [],
        errors: "",
      };

    case GET_VIDEOS_FAILED:
      return {
        videos: [],
        errors: action.payload,
      };

    default:
      return state;
  }
};

const initSelectedVideo = {
  video: {},
  error: "",
};

export const selectVideoReducer = (state = initSelectedVideo, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return { ...state, video: action.payload };

    case REMOVE_SELECTED_VIDEO:
      return { video: {}, error: "" };

    case SELECT_VIDEO_FAILED:
      return { video: {}, error: action.payload };

    default:
      return state;
  }
};
