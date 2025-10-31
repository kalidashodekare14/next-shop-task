import DetailPage from '@/components/Pages/DetailPage'
import React from 'react'

export const dynamic= "force-dynamic";

export default async function SingleDetailsPage({ params }: { params: { slug: string } }) {

  const { slug } = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${slug}`,
    { next: { revalidate: 60 } }
  )
  const data = await res.json()

  return (
    <div className='lg:mx-32 mx-5'>
      <DetailPage singleData={data.data} />
    </div>
  )
}


