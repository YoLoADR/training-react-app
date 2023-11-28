// ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productsSlice';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products.filter(product => product.stock > 0));

  useEffect(() => {
    dispatch(fetchProducts(true)); // Mettez `true` pour utiliser les données mockées
  }, [dispatch]);

  return (
    <div className="p-6 bg-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.thumbnail} alt="product" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700">{product.description}</p>
              <div className="mt-2">
                <span className="text-lg font-bold">${product.price}</span>
              </div>
              <div className="mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;