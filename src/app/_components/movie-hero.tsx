import Image from 'next/image'

export function MovieHero() {
  return (
    <section
      id="movie-hero"
      className="grid gap-10 sm:grid-cols-[200px_1fr] sm:grid-rows-[300px]"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg sm:aspect-auto">
        <Image
          src="/movie.svg"
          alt="Movie"
          fill
          priority
          quality={100}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          className="h-full w-full"
        />
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        molestiae ab officia in ratione. Corrupti facere laudantium veritatis
        facilis nemo iure quo beatae recusandae ex! Dolorum tempora corrupti
        culpa nemo!
      </div>
    </section>
  )
}
