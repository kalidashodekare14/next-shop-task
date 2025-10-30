import DetailPage from '@/app/components/DetailPage'
import React from 'react'

export default async function SingleDetailsPage({ params }: { params: { slug: string } }) {

  const { slug } = await params

  const res = await fetch(`http://localhost:3000/api/products/${slug}`,
    { next: { revalidate: 60 } }
  )
  const data = await res.json()

  return (
    <div className='lg:mx-32 mx-5'>
      <DetailPage singleData={data.data} />
    </div>
  )
}


