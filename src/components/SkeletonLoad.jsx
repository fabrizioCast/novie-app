import { Skeleton } from "@mui/material";

import "./SkeletonLoad.scss";

const SkeletonLoad = () => {
  return (
    <div className="skeleton">
      {Array.from(new Array(14)).map((el, index) => (
        <div key={index} className="skeleton-item">
          <Skeleton variant="rectangular" width={200} height={300} />
          <Skeleton variant="text" height={50} />
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoad;
