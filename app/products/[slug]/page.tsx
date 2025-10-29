import React from 'react'

export default async function DetailsPage({ params }: { params: { slug: string } }) {

  const { slug } = await params

  const res = await fetch(`http://localhost:3000/api/products/${slug}`,
    { next: { revalidate: 60 } }
  )
  const data = await res.json()


  return (
    <div>

    </div>
  )
}


