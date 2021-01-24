import React, { useEffect, useState } from 'react';
import styles from './ListProperties.module.css';

const ListProperties: React.FC = ({ data }: any) => {
  const [product, setProduct] = useState({});
  const [disabled, setDisabled] = useState({});

  return (
    <div className="col-md-8">
      {data.attributes &&
        data.attributes.map((attribute, key) => {
          return (
            <div key={attribute.key} className={`row ${styles.contain}`}>
              <div className="col-md-12">
                <h4>{attribute.name}</h4>
              </div>
              {attribute.options.map((option, keyOption) => {
                return (
                  <div className="col-md-4">
                    <button
                      type="button"
                      className={`${styles.btnOption} ${
                        product[attribute.name] === keyOption
                          ? styles.btnOptionActive
                          : ''
                      }`}
                      key={option.key}
                      onClick={() => {
                        if (data.attributes[key + 1]) {
                          data.attributes[key + 1].options.map(
                            (afterAttribute) => {
                              const btnDisabled =
                                afterAttribute.show.indexOf(keyOption) > -1;
                              setDisabled({
                                ...disabled,
                                [afterAttribute.key]: btnDisabled,
                              });

                              console.log(disabled);

                              return false;
                            },
                          );
                        }
                        setProduct({
                          ...product,
                          [attribute.name]: keyOption,
                        });
                      }}
                    >
                      <div key={option.key}>
                        <img
                          src={`/images/${option.image}`}
                          alt={option.name}
                          className="img-responsive"
                        />
                        <span>{option.name}</span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};
export default ListProperties;
