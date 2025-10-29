import HomePage from './components/HomePage';


export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 60 },
  })

  const products = await res.json();


  return (
    <div className='mx-32'>
      <HomePage products={products.data} />
    </div>
  );
}
