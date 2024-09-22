"use client";
import LightGallery from "lightgallery/react";

// // import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import Image from "next/image";

export function Gallery({ images }: { images: string[] }) {
  return (
    <LightGallery
      elementClassNames="grid grid-cols-2 lg:grid-cols-3 gap-3 my-5"
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      {images?.map((image, index) => (
        <Link href={image} key={index}>
          <Image
            alt={`${image} ${index}`}
            height={500}
            width={500}
            src={image}
            className="h-[200px] w-full object-cover"
          />
        </Link>
      ))}
    </LightGallery>
  );
}
