import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addCategoryMutation,
  getCategoryMutation,
} from "../api/functions/providerservice.api";

const useCategory = () => {
  const addCategory = useMutation("addCategory", addCategoryMutation);
  const getCategory = useMutation("getCategory", getCategoryMutation);

  return {
    addCategory,
    getCategory,
  };
};

export default useCategory;
