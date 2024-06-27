export default function rewriteImageUrl(url: string, size: number): string {
  // TODO improve with lastIndexOf and slice
  return url.replace("=s0", `=s${size}`);
}
