import queryString from "query-string";

type Product = {
  id: string;
  reference: string;
  image: string;
  price: number;
  width: number;
  height: number;
  description: string;
};

type Customer = {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const fetchItem = async (
  entity: string,
  id: string
): Promise<Product | Customer> => {
  const response = await fetch(
    `https://json-server-now.pemoreau.now.sh/${entity}/${id}`
  );

  const result = await response.json();
  return result;
};

// const products = generateData().products;
export const fetchCollection = (entity: "products" | "customers") => async (
  pageSize: number,
  pageNumber: number
): Promise<[Product[] | Customer[], number]> => {
  const parameters = queryString.stringify({
    _limit: pageSize,
    _page: pageNumber
  });
  const response = await fetch(
    `https://json-server-now.pemoreau.now.sh/${entity}?${parameters}`
  );
  const totalCount = await response.headers.get("x-total-count");
  const products = await response.json();

  if (totalCount === null) {
    return [products, products.length];
  }

  return [products, parseInt(totalCount)];
};
