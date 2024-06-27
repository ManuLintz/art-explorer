import getArt from "@/api/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import TileItem from "@/TileItem";

function TilesList() {
  const {
    data,
    error,
    fetchNextPage,
    // hasNextPage,
    // isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["artObjects"],
    queryFn: getArt,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      console.log(lastPage, pages);
      return pages.length + 1;
    },
  });
  return (
    <>
      <div className="tiles">
        {status === "pending" ? (
          <p>Loading...</p>
        ) : status === "error" ? (
          <p>Error: {error.message}</p>
        ) : (
          data?.pages.map((group) =>
            group?.artObjects.map((artObject) => (
              <TileItem
                key={artObject.id}
                imageUrl={artObject.webImage.url}
                description={artObject.longTitle}
              />
            )),
          )
        )}
      </div>
      <button
        onClick={() => {
          fetchNextPage();
        }}
      >
        {isFetchingNextPage ? "..." : "More"}
      </button>
    </>
  );
}

export default TilesList;
