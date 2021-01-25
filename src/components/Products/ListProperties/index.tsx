import React, { useState } from 'react';
import styles from './ListProperties.module.css';
import { ProductListProps } from '../../../types';

const ListProperties: React.FC<ProductListProps> = ({
  data,
}: ProductListProps) => {
  const [product, setProduct] = useState({});
  const [disabled, setDisabled] = useState({});

  const handleProductAttributes = (keyOption, attribute, beforeAttribute) => {
    let elements = {};
    beforeAttribute.options.forEach((afterAttribute) => {
      const btnDisabled = afterAttribute.show.indexOf(keyOption) > -1;
      elements = {
        ...elements,
        [afterAttribute.key]: !btnDisabled,
      };
    });
    setDisabled({ ...disabled, ...elements });

    let actualAttribute = false;
    Object.keys(product).forEach((item) => {
      if (item === attribute.name) actualAttribute = true;

      if (actualAttribute === true) {
        delete product[item];
      }
    });
  };

  return (
    <div className="col-md-8">
      {data.attributes &&
        data.attributes.map((attribute, key) => {
          return (
            <div
              key={attribute.key}
              className={`row ${styles.contain} ${
                key > 0 && product[data.attributes[key - 1].name] === undefined
                  ? styles.hideOption
                  : ''
              }`}
            >
              <div className="col-md-12">
                <h4>{attribute.name}</h4>
              </div>
              {attribute.options.map((option, keyOption) => {
                return (
                  <div
                    className={`col-md-4 ${
                      key > 0 &&
                      disabled[option.key] !== undefined &&
                      disabled[option.key] === true
                        ? styles.hideOption
                        : ''
                    }`}
                  >
                    <button
                      type="button"
                      key={option.key}
                      className={`${styles.btnOption} ${
                        product[attribute.name] === keyOption
                          ? styles.btnOptionActive
                          : ''
                      }`}
                      disabled={
                        key > 0 && disabled[option.key] !== undefined
                          ? disabled[option.key]
                          : false
                      }
                      onClick={() => {
                        if (data.attributes[key + 1]) {
                          handleProductAttributes(
                            keyOption,
                            attribute,
                            data.attributes[key + 1],
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
