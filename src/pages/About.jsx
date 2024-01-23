import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl front-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet sunt
        voluptas. Natus porro labore facilis qui in autem rem tenetur
        praesentium placeat iusto sapiente alias consequatur voluptatum, itaque
        blanditiis. Voluptatibus laborum, quia beatae delectus nesciunt
        doloremque sit eius recusandae.
      </p>
    </>
  );
};

export default About;
