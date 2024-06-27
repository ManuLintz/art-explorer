export default function rewriteImageUrl(url: string, size: number): string {
  return url.replace("=s0", `=s${size}`);
}
