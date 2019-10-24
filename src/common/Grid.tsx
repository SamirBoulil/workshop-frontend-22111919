import React, { useReducer, ReactElement, useContext } from "react";
import PageSelector from "./page-selector";
import PageNumberSelector from "./page-number-selector";
import styled from "styled-components";
import { useLoadingContext } from "../loading-context";
import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../store";

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Pagination = { page: number; pageSize: number };
type Action =
  | {
      type: "update_page_size";
      newPageSize: number;
    }
  | {
      type: "update_page";
      newPage: number;
    };
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

const paginationReducer = (state: Pagination, action: Action) => {
  switch (action.type) {
    case "update_page_size":
      return { ...state, pageSize: action.newPageSize };
    case "update_page":
      return { ...state, page: action.newPage };
    // default:
    //   assertNever(action);
  }
};

const useCollection = (
  fetcher: (pageSize: number, pageNumber: number) => Promise<any>,
  pageSize: number,
  pageNumber: number,
  setCollection: (collection: any[]) => void,
  setTotalEntity: (total: number) => void
) => {
  // const { setIsLoading } = useLoadingContext(); // <-- With React.Context
  const dispatch = useDispatch();

  React.useEffect(() => {
    // setIsLoading(true);
    dispatch(startLoading);
    const fetchData = async () => {
      const [entities, totalCount] = await fetcher(pageSize, pageNumber);
      setCollection(entities);
      setTotalEntity(Math.floor(totalCount / pageSize));

      // setIsLoading(false);
      // dispatch(stopLoading());
      dispatch(stopLoading);
    };
    fetchData();
  }, [pageSize, pageNumber]);
};

type GridProps = {
  children: any;
  fetcher: (pageSize: number, pageNumber: number) => Promise<any>;
};
const Grid = ({ fetcher, children }: GridProps) => {
  const Row: ReactElement<any> = children;
  const [collection, setCollection] = React.useState<any>([]);
  const [totalPages, setTotalPages] = React.useState(1);
  const [{ page, pageSize }, dispatch] = useReducer(paginationReducer, {
    page: 1,
    pageSize: 10
  });
  useCollection(fetcher, pageSize, page, setCollection, setTotalPages);

  return (
    <>
      <PageSelector
        value={pageSize}
        options={[10, { value: 20, text: "vingt" }, 30]}
        onChange={newPageSize =>
          dispatch({ type: "update_page_size", newPageSize })
        }
      />
      <PageNumberSelector
        value={page}
        onChange={newPage => dispatch({ type: "update_page", newPage })}
        totalPages={totalPages}
      />
      <FlexGrid>
        {collection.map((entity: any) =>
          React.cloneElement(Row, {
            ...entity,
            key: entity.id
          })
        )}
      </FlexGrid>
    </>
  );
};

export default Grid;
