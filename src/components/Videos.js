import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useVideoList from "../hooks/useVideoList";
import Video from "./Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 8)}
          className="grid justify-center justify-items-center  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-6 mt-10 mb-10 gap-4"
        >
          {videos.map((video) => (
            <Video
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}
              key={video.youtubeID}
            />
          ))}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No data found!</div>}

      {error && <div>There was an error!</div>}

      {loading && <div>Loading...</div>}
    </div>
  );
}
