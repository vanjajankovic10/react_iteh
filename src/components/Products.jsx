import Card from "./Card";

function Products({ products, criteria, add }) {

    if (!products) {
        return null; 
      }

  return (
    <div className="row">
      {criteria === "" ? (
        products.map((r) => (
          <div key={r.id}>
            <Card add={add} key={r.id} r={r} mod={1}></Card>
            <br />
          </div>
        ))
      ) : (
        <>
          {products
            .filter((r) =>
              r.brand.toLowerCase().includes(criteria.toLowerCase())
            )
            .map((r) => (
              <div key={r.id}>
                <Card add={add} key={r.id} r={r} mod={1}></Card>
                <br />
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Products;