import React from "react";

function Waiting() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-2 mt-5">
      <img
        src="https://img.icons8.com/fluency/96/000000/upload--v16.png"
        alt="Waiting to upload."
        width="100"
        height="100"
      />
      <span>
        You need to upload <b>.sarif</b> file.
      </span>
    </div>
  );
}

export default React.memo(Waiting);
