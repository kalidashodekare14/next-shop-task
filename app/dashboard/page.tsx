import DashboardPage from '@/components/Pages/DashboardPage';

export const dynamic= "force-dynamic";

const MainDashboard = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
        next: { revalidate: 60 },
    })
    const products = await res.json();
    const totalData = products.data.length;
    const lowStock = products.data.filter((p: any) => p.inventory < 10).length

    return (
        <div className='lg:mx-32 mx-5'>
            <DashboardPage totalProduct={products.data} totalData={totalData} lowStock={lowStock} />
        </div>
    );
};

export default MainDashboard;