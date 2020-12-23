export type OrderProps = {
  date: string;
  price: string;
  order: number;
  status: string;
  fileLayout?: string;
  details?: boolean;
  children?: React.ReactNode;
};
