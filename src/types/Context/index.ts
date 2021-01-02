export type AuthContextType = {
  isAuthenticated: boolean;
  isLoading?: boolean;
  user: any;
  login?: (email: string, password: string) => Promise<any> | undefined;
  logout?: () => void | undefined;
};
