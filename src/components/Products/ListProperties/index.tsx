import React, { useEffect, useState } from 'react';
import styles from './ListProperties.module.css';

const ListProperties: React.FC = ({ data }: any) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div className="col-md-8">
      {data.attributes &&
        data.attributes.map(({ key, name, options }) => {
          return (
            <div key={key} className={`row ${styles.contain}`}>
              <div className="col-md-12">
                <h4>{name}</h4>
              </div>
              {options.map(({ key, name, image }) => (
                <button
                  type="button"
                  className="col-md-4"
                  onClick={() => {
                    setProduct({ ...product, key: { name, selected: key } });
                  }}
                >
                  <div key={key}>
                    <img
                      src={`/images/${image}`}
                      alt={name}
                      className="img-responsive"
                    />
                    <span>{name}</span>
                  </div>
                </button>
              ))}
            </div>
          );
        })}
    </div>
  );
};
export default ListProperties;
