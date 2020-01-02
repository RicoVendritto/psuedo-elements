import React from "react";

const Main = () => {
  return (
    <main>
      <h1 class="intro">Some great psuedo element effects</h1>
      <div className="container">
        <div className="card">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-audi-rs6-avant-101-1574772328.jpg?crop=0.613xw:0.614xh;0.102xw,0.174xh&resize=980:*"
            className="card__img"
          />
          <div className="card__text">
            <h4 className="card__title">IMAGE</h4>
            <p className="card__body">This is a beautiful image</p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.evo.co.uk/image/upload/t_content-image-desktop@2/v1576577563/evo/2019/12/Audi%20RSQ8%201-5.jpg"
            className="card__img"
          />
          <div className="card__text">
            <h4 className="card__title">IMAGE</h4>
            <p className="card__body">This is a beautiful image</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;