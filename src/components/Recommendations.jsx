import React from "react";
import Welcome from "./Welcome";
const Recommendations = () => {
  return (
    <div className="naslovna">
      <Welcome />
      <div className="bestseller-box">
        <div className="title">
        <p>Let us show you our best products!</p>
        </div>
      
            <div className="products">
            
                <div className="product">
                    <h1 className="">Avene Tolerance Control</h1>
                    <h2 className="">Soothing skin recovery cream</h2>
                    <img src="images/aveneTolerance.png" alt=""></img>
                </div>
                <div className="product">
                    <h1 className="">La Roche Posay</h1>
                    <h2 className="">Effaclar lotion</h2>
                    <img src="images/lrpEffaclar.png" alt=""></img>
                </div>
                <div className="product">
                    <h1 className="">The Ordinary</h1>
                    <h2 className="">Niacinamide 10% + Zinc 1%</h2>
                    <img src="images/ordinaryNiacinamide.png" alt=""></img>
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default Recommendations;