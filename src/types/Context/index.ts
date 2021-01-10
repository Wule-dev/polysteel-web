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
  error?: any;
};
