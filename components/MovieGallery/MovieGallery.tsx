import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import { imagesUrl, IMovieImages } from 'lib/tmdbAPI';

type MovieGalleryProps = {
  images: IMovieImages[];
};

function MovieGallery({ images }: MovieGalleryProps) {
  const imagesForGallery: ReactImageGalleryItem[] = images.map((img) => ({
    original: `${imagesUrl}${img.file_path}`,
    thumbnail: `${imagesUrl}${img.file_path}`,
  }));

  return <ImageGallery items={imagesForGallery} additionalClass="bg-gray-800 p-2 overflow-hidden rounded" />;
}

export default MovieGallery;
