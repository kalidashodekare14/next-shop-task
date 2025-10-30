import React from 'react';
import DashboardPage from '../components/DashboardPage'

const MainDashboard = async () => {

    const res = await fetch("http://localhost:3000/api/products", {
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