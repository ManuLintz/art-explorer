export default function rewriteImageUrl(url: string, size: number): string {
  const lastOcurrence = url.lastIndexOf("=s0");
  if (lastOcurrence === -1) {
    return `${url}=s${size}`;
  }
  return `${url.substring(0, lastOcurrence)}=s${size}`;
}
