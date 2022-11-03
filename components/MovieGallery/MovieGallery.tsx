import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import { imagesUrl, IMovieImages } from 'lib/tmdbAPI';

type MovieGalleryProps = {
  images: IMovieImages[];
};

export function MovieGallery({ images }: MovieGalleryProps) {
  const imagesForGallery: ReactImageGalleryItem[] = images.map((img) => ({
    original: `${imagesUrl.original}${img.file_path}`,
    thumbnail: `${imagesUrl.small}${img.file_path}`,
  }));

  return (
    <div className="block w-full">
      <ImageGallery items={imagesForGallery} />
    </div>
  );
}
