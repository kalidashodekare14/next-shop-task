import HomePage from '../components/Pages/HomePage';

export const dynamic= "force-dynamic";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    next: { revalidate: 60 },
  })

  const products = await res.json();


  return (
    <div className='mx-32'>
      <HomePage products={products.data} />
    </div>
  );
}
