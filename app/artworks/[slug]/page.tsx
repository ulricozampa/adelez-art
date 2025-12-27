import Image from 'next/image'
import { categories } from '../../artworks'
import { notFound } from 'next/navigation'

/* ✅ REQUIRED for static export */
export function generateStaticParams() {
  return categories
    .flatMap((cat) => cat.images)
    .map((art) => ({
      slug: art.slug,
    }))
}

export default function ArtworkPage({
  params,
}: {
  params: { slug: string }
}) {
  const artwork = categories
    .flatMap((cat) => cat.images)
    .find((art) => art.slug === params.slug)

  if (!artwork) return notFound()

  return (
    <article style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', marginTop: '50pt' }}>
      <Image
        src={artwork.image}
        alt={artwork.title}
        width={900}
        height={900}
        style={{ objectFit: 'contain' }}
      />

      <h1>{artwork.title}</h1>
      <p>{artwork.year}</p>
      <p>{artwork.medium}</p>
      <p>{artwork.dimensions}</p>
    </article>
  )
}
