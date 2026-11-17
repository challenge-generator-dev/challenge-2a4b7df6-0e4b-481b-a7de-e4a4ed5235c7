import { ProductTable } from './features/products/ProductTable';
import ProductService from './shared/services/product.service';

const API_BASE_URL = 'http://localhost:3000';

const productService = new ProductService(API_BASE_URL);

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Gestión de Productos</h1>
      </header>
      
      <main className="app-main">
        <ProductTable
          service={productService}
        />
      </main>
    </div>
  );
}

export default App;