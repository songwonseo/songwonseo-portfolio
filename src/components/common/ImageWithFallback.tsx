import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { getAssetUrl } from "../../utils/path";

export function ImageWithFallback({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div
        className={`image-placeholder ${className}`}
        role="img"
        aria-label={`${alt} 이미지 준비 중`}
      >
        <ImageIcon aria-hidden="true" />
        <strong>{label}</strong>
        <span>이미지 준비 중</span>
      </div>
    );
  return (
    <img
      className={className}
      src={getAssetUrl(src)}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
