import fetchVideo, { DEFAULT_PARAMS } from "../../api/fetchVideo";
import {
  CLEAR_VIDEOS,
  GET_VIDEOS,
  GET_VIDEOS_FAILED,
  REMOVE_SELECTED_VIDEO,
  SELECT_VIDEO,
  SELECT_VIDEO_FAILED,
} from "../types";

export const getSearchedVideos = (searchQuery) => {
  return async (dispatch) => {
    try {
      const response = await fetchVideo(`/search`, {
        params: {
          ...DEFAULT_PARAMS,
          maxResults: 25,
          q: searchQuery,
        },
      });

      const payload = await response.data.items
        .filter((item) => "snippet" in item)
        .map((item) => {
          return {
            id: item.id.videoId,
            thumbnail: item.snippet.thumbnails.high.url,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
          };
        });

      dispatch({
        type: GET_VIDEOS,
        payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_VIDEOS_FAILED,
        payload: error.message,
      });
    }
  };
};

export const getRelatedVideos = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetchVideo(`/search`, {
        params: {
          ...DEFAULT_PARAMS,
          relatedToVideoId: id,
        },
      });

      const payload = await response.data.items
        .filter((item) => "snippet" in item)
        .map((item) => {
          return {
            id: item.id.videoId,
            thumbnail: item.snippet.thumbnails.high.url,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
          };
        });

      dispatch({
        type: GET_VIDEOS,
        payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_VIDEOS_FAILED,
        payload: error.message,
      });
    }
  };
};

export const getPopulerVideos = () => {
  return async (dispatch) => {
    try {
      const response = await fetchVideo("/videos", {
        params: {
          ...DEFAULT_PARAMS,
          chart: "mostPopular",
          maxResults: 25,
          regionCode: "BD",
        },
      });

      const payload = await response.data.items
        .filter((item) => "snippet" in item)
        .map((item) => {
          return {
            id: item.id,
            thumbnail: item.snippet.thumbnails.high.url,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
          };
        });

      dispatch({
        type: GET_VIDEOS,
        payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_VIDEOS_FAILED,
        payload: error.message,
      });
    }
  };
};

export const clearVideos = () => {
  return {
    type: CLEAR_VIDEOS,
  };
};

export const selectVideo = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetchVideo(`/videos`, {
        params: {
          ...DEFAULT_PARAMS,
          id: id,
        },
      });

      const payload = await response.data.items
        .filter((item) => "snippet" in item)
        .map((item) => {
          return {
            id: item.id,
            title: item.snippet.title,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
          };
        });

      dispatch({
        type: SELECT_VIDEO,
        payload: payload[0],
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: SELECT_VIDEO_FAILED,
        payload: error.message,
      });
    }
  };
};

export const removeSelectedVideo = () => {
  return {
    type: REMOVE_SELECTED_VIDEO,
  };
};
