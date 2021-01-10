export type AuthContextType = {
  user: any;
  loading: boolean;
  login?: (email: string, password: string) => Promise<any> | undefined;
  logout?: () => void | undefined;
<<<<<<< HEAD
  join?: (
    name: string,
    email: string,
    password: string,
  ) => Promise<any> | undefined;
  error?: any;
=======
>>>>>>> b92afcadb1305a227a7a60b5d98d1489916ae625
};
