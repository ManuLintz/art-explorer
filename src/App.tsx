function App() {
  return (
    <>
      <header></header>
      <main>
        <div className="container">
          <div className="tiles">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="tile">
                {index}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
