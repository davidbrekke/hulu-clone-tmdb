import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
import { forwardRef } from "react";

// using forward ref
const VideoCard = forwardRef(({ movie }, ref) => {
  const baseUrl = "http://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2 className="movie-title">{movie.title || movie.original_title}</h2>
      <p className="video-card-details">
        {movie.media_type && `${movie.media_type} -`}
        {movie.release_date || movie.first_air_date} : {` `}
        <ThumbUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
