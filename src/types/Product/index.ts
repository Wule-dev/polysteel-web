export type Product = {
  name: string;
};

export type ProductListProps = {
  data: {
    id: string;
    name: string;
    description: string;
    hasCustomFormat: boolean;
    images: string[];
    category: string[];
    price: number;
    measure: string;
    attributes?: [
      {
        key: string;
        name: string;
        options: [
          {
            image?: string;
            key: string;
            description?: string;
            name: string;
            position: number;
            price?: [];
            show: number[];
          },
        ];
        visible: boolean;
      },
    ];
  } | null;
};
