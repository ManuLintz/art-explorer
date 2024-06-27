import rewriteImageUrl from "./utils/rewriteImageUrl";

export default function TileItem({
  imageUrl,
  description,
}: {
  imageUrl: string;
  description: string;
}) {
  return (
    <div
      className="tile"
      style={{ backgroundImage: `url(${rewriteImageUrl(imageUrl, 400)})` }}
    >
      <p>{description}</p>
    </div>
  );
}
