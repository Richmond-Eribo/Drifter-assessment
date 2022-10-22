import React from 'react';
import featuresData from '../../data/featuresData';

const Features = () => {
  return (
    <section>
      <div>
        {featuresData.map((item) => {
          return <div key={item.heading}>{item.heading}</div>;
        })}
      </div>
    </section>
  );
};

export default Features;
