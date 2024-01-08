import Card from './components/Card';

function App() {
  return (
    <div>
      <Card
        name="Product 1"
        description="Description for Product 1"
        price={19.99}
        imageUrl="https://via.placeholder.com/300"
      />
    </div>
  );
}

export default App;
