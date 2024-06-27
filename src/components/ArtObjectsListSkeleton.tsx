export default function ArtObjectsListSkeleton({
  numberOfTiles,
}: {
  numberOfTiles: number;
}) {
  return (
    <>
      {Array.from({ length: numberOfTiles }).map((_, index) => (
        <div key={index} className="tile skeleton"></div>
      ))}
    </>
  );
}
