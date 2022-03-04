import React from "react";
import { useNavigate } from "react-router-dom";

function Song({ track }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-1 pl-2 pr-3 w-100 trackHover d-flex align-items-center">
        <div className="px-3">
          <h6 className="card-title trackHover mb-0" style={{ color: "white" }}>
            {track.title}
          </h6>
          <p
            onClick={() => navigate(`/artist/${track.artist.id}`)}
            className="mb-0 text-muted"
            style={{ color: "white", fontSize: "14px" }}
          >
            {track.artist.name}
          </p>
        </div>
        <small className="duration ml-auto" style={{ color: "white" }}>
          {Math.floor(parseInt(track.duration) / 60)}:
          {parseInt(track.duration) % 60 < 10
            ? "0" + (parseInt(track.duration) % 60)
            : parseInt(track.duration) % 60}
        </small>
      </div>
    </div>
  );
}

export default Song;

// const Song = ({ track }) => (
//   return(
//     <div className="py-1 pl-2 pr-3 w-100 trackHover d-flex align-items-center">
//     <div className="px-3">
//       <h6 className="card-title trackHover mb-0" style={{ color: "white" }}>
//         {track.title}
//       </h6>
//       <p
//         className="mb-0 text-muted"
//         style={{ color: "white", fontSize: "14px" }}
//       >
//         {track.artist.name}
//       </p>
//     </div>
//     <small className="duration ml-auto" style={{ color: "white" }}>
//       {Math.floor(parseInt(track.duration) / 60)}:
//       {parseInt(track.duration) % 60 < 10
//         ? "0" + (parseInt(track.duration) % 60)
//         : parseInt(track.duration) % 60}
//     </small>
//   </div>
//   )
// );

// export default Song;
