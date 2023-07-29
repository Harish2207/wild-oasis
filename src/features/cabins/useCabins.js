import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"], //uniquely identifies the data we are going to query,
    queryFn: getCabins, //must return a promisr
  });

  return { isLoading, error, cabins };
}
