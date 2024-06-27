import { useEffect, useMemo } from "react";
import getArtObjects from "@/api/artObjects";
import { useInfiniteQuery } from "@tanstack/react-query";
import ArtObjectItem from "@/components/ArtObjectItem";
import ArtObjectsListSkeleton from "@/components/ArtObjectsListSkeleton";
import Hero from "@/components/layout/Hero";
import { ArtObject } from "@/types";
import "@/components/ArtObject.css";

const numberOfItemsPerPage = 20;

function ArtObjectsList({ query }: { query: string }) {
  const {
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    status,
    hasNextPage,
    isFetchNextPageError,
    isPaused,
  } = useInfiniteQuery({
    queryKey: ["artObjects", { query }],
    queryFn: ({ pageParam }) =>
      getArtObjects({ pageParam, query, numberOfItemsPerPage }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.artObjects.length < numberOfItemsPerPage) {
        return null;
      }
      return pages.length + 1;
    },
  });

  const isEmpty = useMemo(
    () => data?.pages[0]?.artObjects.length === 0,
    [data],
  );

  useEffect(() => {
    if (isFetchNextPageError) {
      alert("Error fetching more data");
    }
    if (isPaused) {
      alert("Paused fetching more data");
    }
  }, [isFetchNextPageError, isPaused]);
  if (status === "pending") {
    return (
      <div className="tiles">
        <ArtObjectsListSkeleton numberOfTiles={numberOfItemsPerPage} />
      </div>
    );
  } else if (status === "error") {
    return (
      <Hero>
        <h1>Something went wrong</h1>
        <p>Error: {error.message}</p>
      </Hero>
    );
  } else if (isEmpty) {
    return (
      <Hero>
        <h1>No results for "{query}"</h1>
      </Hero>
    );
  }

  return (
    <>
      <div className="tiles">
        {data?.pages.map((group) =>
          group?.artObjects.map((artObject: ArtObject) => (
            <ArtObjectItem
              key={artObject.id}
              imageUrl={artObject.webImage.url}
              description={artObject.longTitle}
            />
          )),
        )}
        {isFetchingNextPage && (
          <ArtObjectsListSkeleton numberOfTiles={numberOfItemsPerPage} />
        )}
      </div>
      <button
        onClick={() => {
          fetchNextPage();
        }}
        disabled={!hasNextPage || isFetchingNextPage}
        className="more-button"
      >
        {isFetchingNextPage ? "..." : hasNextPage ? "More" : "No more results"}
      </button>
    </>
  );
}

export default ArtObjectsList;
