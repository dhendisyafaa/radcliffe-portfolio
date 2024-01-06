import { useMutation, useQueryClient } from "@tanstack/react-query";
import useQueryNoRefecth from "../hooks/useQueryNoRefetch";
import { getDataProfile } from "../services/linkedinApi";

const useDataProfile = () =>
  useQueryNoRefecth(["me"], async () => await getDataProfile());

export { useDataProfile };
