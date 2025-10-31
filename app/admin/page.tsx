import { AdminPage } from '@/components/Pages/AdminPage'

export const dynamic= "force-dynamic";


export default async function Admin() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
        next: { revalidate: 60 },
    })

    const products = await res.json();

    return (
        <div className='lg:mx-32 mx-5 my-10'>
            <AdminPage products={products.data} />
        </div>
    )
}


