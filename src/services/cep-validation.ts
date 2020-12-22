import Axios from 'axios';
import { CepValidationProps } from '../types';

export const getCepData = async (cep: number): Promise<CepValidationProps> =>
  Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
