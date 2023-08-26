function Card ({ r, add, mod, remove }){
    return(
        <div className="card">
      <img src={r.pic} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{r.brand}</h5>
        <p className="card-text">
          {r.description} <br /> 
        </p>
        {mod === 1 ? (
          <button className="add" onClick={() => add(r.id)}>
            Add to wishlist
          </button>
        ) : (
          <button className="remove" onClick={() => remove(r.id)}>
            Remove from wishlist
          </button>
        )}
      </div>
    </div>
    );
}

export default Card;