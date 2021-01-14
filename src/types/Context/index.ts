export type AuthContextType = {
  user: any;
  loading: boolean;
  login?: (email: string, password: string) => Promise<any> | undefined;
  logout?: () => void | undefined;
  join?: (
    name: string,
    email: string,
    password: string,
  ) => Promise<any> | undefined;
  userData?: () => {
    actived: boolean;
    address: {
      additionalAddress: string;
      cep: string;
      city: string;
      neighborhood: string;
      number: number;
      referencePoint: string;
      state: string;
      street: string;
    };
    company?: {
      name: string;
      phone: string;
      cnpj: string;
      address: {
        additionalAddress: string;
        cep: string;
        city: string;
        neighborhood: string;
        number: number;
        referencePoint: string;
        state: string;
        street: string;
      };
    };
    cpf: string;
    customerId: string;
    email: string;
    iat: number;
    name: string;
    phone: string;
  };
  error?: any;
};
