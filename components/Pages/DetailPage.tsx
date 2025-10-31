"use client"
import React from 'react';

type SignelProduct = {
    _id: string,
    name: string,
    category: string,
    price: number,
    image: string,
    description: string,
}


const DetailPage = ({ singleData }: { singleData: SignelProduct }) => {
    console.log('checking data', singleData)
    return (
        <div className='flex gap-5'>
            <div className='border'>
                <img src={singleData?.image} alt="" />
            </div>
            <div className='space-y-1'>
                <h2 className='text-3xl'>{singleData?.name}</h2>
                <p className='text-xl'>{singleData?.category}</p>
                <p className='text-xl'>${singleData?.price}</p>
                <p className=''>{singleData?.description}</p>
            </div>
        </div>
    );
};

export default DetailPage;