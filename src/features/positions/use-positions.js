import { useSelector } from "react-redux";

import { selectVisiblePositions } from "./position-slice";

import { selectFilters } from "features/filter/filtre-slice";

export const usePositions = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  return positions;
};
