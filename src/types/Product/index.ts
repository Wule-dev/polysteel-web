export type Product = {
  name: string;
};

export type ProductListProps = {
  data: {
    attributes: [
      {
        key: string;
        name: string;
        options: [
          {
            image?: string;
            key: string;
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
