import React, { useEffect, useState } from 'react';
import { getCepData } from '../../services/cep-validation';
import { CepValidationProps } from '../../types';

const Address = (): JSX.Element => {
  const [cepValue, setCepValue] = useState(null);
  const [formActive, setFormActive] = useState(true);
  const [error, setError] = useState(false);
  const [cepData, setCepData] = useState<CepValidationProps>({
    cep: null,
    logradouro: null,
    complemento: null,
    bairro: null,
    localidade: null,
    uf: null,
    ibge: null,
    gia: null,
    ddd: null,
    siafi: null,
    data: null,
  });

  useEffect(() => {
    if (cepValue === null) {
      setFormActive(true);
    } else if (
      cepValue.replace(/\D/g, '').length !== 8 ||
      cepData.logradouro === null ||
      cepData.logradouro === ''
    ) {
      setFormActive(true);
    }
  }, [cepValue, cepData]);

  const validateCep = async () => {
    const cepNumber = cepValue.replace(/\D/g, '');
    const { data } = await getCepData(cepNumber);
    if (typeof data.erro !== 'undefined') {
      setError(true);
      setFormActive(true);
    } else {
      setCepData(data);
    }
  };

  const sendRequest = () => {
    if (cepValue && cepValue.replace(/\D/g, '').length === 8) {
      setFormActive(false);
      validateCep();
      setError(false);
    } else {
      setError(true);
      setFormActive(true);
    }
  };

  return (
    <>
      <label htmlFor="cep">
        <span>CEP</span>
        <div className="row">
          <div className="col">
            <input
              autoComplete="false"
              type="text"
              placeholder="CEP"
              id="cep"
              className={error === true ? 'erroInput' : ''}
              onChange={(event) => setCepValue(event.target.value)}
            />
          </div>
          <div className="col-auto">
            <button type="button" className="btn-primary" onClick={sendRequest}>
              Validar CEP
            </button>
          </div>
        </div>
      </label>
      <label htmlFor="logradouro">
        <span>Rua/Logradouro</span>
        <input
          autoComplete="false"
          type="text"
          placeholder="Rua/Logradouro"
          id="logradouro"
          value={cepData.logradouro}
          disabled={formActive}
        />
      </label>
      <label htmlFor="number">
        <span>Número da Residência</span>
        <input
          autoComplete="false"
          type="text"
          placeholder="Número"
          id="number"
          disabled={formActive}
        />
      </label>
      <label htmlFor="complemento">
        <span>Complemento (opcional)</span>
        <input
          autoComplete="false"
          type="text"
          placeholder="Complemento/Referência"
          id="complemento"
          disabled={formActive}
        />
      </label>
      <label htmlFor="cidade">
        <span>Cidade</span>
        <input
          autoComplete="false"
          type="text"
          placeholder="Cidade"
          id="cidade"
          value={cepData.localidade}
          disabled={formActive}
        />
      </label>
      <label htmlFor="estado">
        <span>Estado</span>
        <input
          autoComplete="false"
          type="text"
          placeholder="Estado"
          id="estado"
          value={cepData.uf}
          disabled={formActive}
        />
      </label>
      <p>
        <button type="submit" className="btn-primary">
          Cadastrar
        </button>
      </p>
    </>
  );
};

export default Address;
