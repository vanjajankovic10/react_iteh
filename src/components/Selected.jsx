import Card from "./Card";

function Selected({ products, criteria, remove }) {
  return (
    <div className="row-selected">
      {criteria === "" ? (
        products.map((r) => (
          <div key={r.id}>
            <Card key={r.id} r={r} mod={2} remove={remove}></Card>
            <br />
          </div>
        ))
      ) : (
        <>
          {products
            .filter((r) =>
              r.naziv.toLowerCase().includes(criteria.toLowerCase())
            )
            .map((r) => (
              <div key={r.id}>
                <Card key={r.id} r={r} mod={2} remove={remove}></Card>
                <br />
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Selected;