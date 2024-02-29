// ProductsGrid.jsx
import React from 'react';

const products = [
  // Aquí se deben agregar los productos reales
  { id: 1, category: 'Video', price: 100, description: 'Camara', imageUrl: 'https://elsalvador.solutekla.com/photo/1/nikon/camaras_profesionales/camara_profesional_nikon_d5600_lente1855mm/camara_profesional_nikon_d5600_lente1855mm_0001' },
  { id: 2, category: 'Video', price: 100, description: 'Mini Camara', imageUrl: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202303/01/00110110110839____1__1200x1200.jpg?impolicy=Resize&width=900' },
  { id: 3, category: 'Audio', price: 150, description: 'Microfono', imageUrl: 'https://coolboxpe.vtexassets.com/arquivos/ids/207728-800-auto?v=637831352992630000&width=800&height=auto&aspect=true' },
  { id: 4, category: 'Audio', price: 150, description: 'Auriculares', imageUrl: 'https://www.comeros.com.ar/wp-content/uploads/2022/10/500_500-19.jpg' },
  { id: 5, category: 'Electronica', price: 200, description: 'Iphone 15 ', imageUrl: 'https://d1cft8rz0k7w99.cloudfront.net/n/2/1/e/e/21ee56e164046cf03149b7e7578a99b13e2e4177_CellPhones_468952_01.jpg' },
  { id: 6, category: 'Electronica', price: 200, description: 'Play Station 5', imageUrl: 'https://buketomnisportpweb.s3.us-east-2.amazonaws.com/products-images/SpOf4P17kxRk8UmdlDz7z2keyrjPrJtjV2noQs7P.jpeg' },
  { id: 7, category: 'Electrodomestico', price: 250, description: 'Refrigerador', imageUrl: 'https://walmartsv.vtexassets.com/arquivos/ids/178665/Refrigeradora-Whirlpool-French-Door-20Pc-1-6527.jpg?v=637642823687800000' },
  { id: 8, category: 'Electrodomestico', price: 250, description: 'Cocina', imageUrl: 'https://agenciasway.com.sv/wp-content/uploads/2023/04/Cocina-Emh7602js0-Gris1.jpeg' },
  { id: 9, category: 'Mueble', price: 300, description: 'Sillon', imageUrl: 'https://www.prado.com.sv/media/catalog/product/s/i/sillon-reclinable-comfortex-csr003011cb-3p-183460.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700' },
  { id: 10, category: 'Mueble', price: 300, description: 'Cama', imageUrl: 'https://bosque.vteximg.com.br/arquivos/ids/167280-1000-1000/Cama-Isabela-Full.jpg?v=637807156830730000' },
  // Continuar agregando productos según se necesite
];

const ProductsGrid = ({ onAddToCart }) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-2 flex flex-col items-center h-auto">
            <img src={product.imageUrl} alt={product.description} className="w-full h-54 object-cover" />
            <p className="text-md mt-2">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => onAddToCart(product)}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductsGrid;

