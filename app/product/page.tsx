'use client'

import { useEffect, useState } from "react"

interface ProductInterface {
    id: number,
    name: string,
    price: number
}

export default function Product() {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        fetchData()
    },[]);

    useEffect(() => {        
        let sumData = 0;

        for (let i = 0; i < products.length; i++){
            //console.log(products[i]); //check error
            sumData += products[i].price;
        }
        setSum(sumData);
    }, [products]);

    const fetchData = () => {
        setProducts([
            {id: 1, name: 'aaa' , price: 900},
            {id: 2, name: 'bbb' , price: 800},   
            {id: 3, name: 'ccc' , price: 1500},           
        ])
    }

    return (
        <div>
            <div>Products</div>
            <div>Rows = {products.length}, SUM = {sum.toLocaleString()}</div>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-400">
                        <th>id</th>
                        <th>name</th>
                        <th className="text-right">price</th>
                    </tr>
                </thead>
            
            <tbody>
            {products.map((Product) => (
                <tr key={Product.id}>
                    <td>{Product.id}</td>
                    <td>{Product.name}</td>
                    <td>
                        {Product.price.toLocaleString('th-TH',{
                            minimumIntegerDigits: 2
                        })}
                    </td>
                </tr>

            ))}
            </tbody>
            <tfoot>
                <tr className="bg-gray-800 text-while text-right">
                    <td colSpan={3} className="bg-gray-400">
                        {sum.toLocaleString('th-TH', {
                            minimumIntegerDigits: 2
                        })}
                    </td>                    
                </tr>

            </tfoot>
            </table>
        </div>
    )
}