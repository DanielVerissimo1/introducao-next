// Atividade 01 

const products = [
  { name: "Camisa", price: 49.90 },
  { name: "Tênis", price: 199.90 },
  { name: "Relógio", price: 299.90 },
];

export default function ProductsPage() {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong> - R$ {product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
