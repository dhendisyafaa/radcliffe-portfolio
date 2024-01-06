import { useMutation, useQueryClient } from "@tanstack/react-query";
import useQueryNoRefecth from "../hooks/useQueryNoRefetch";
import { createContact } from "../services/contactApi";

const useCreateContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newData) => createContact(newData),
    onSuccess: () => {
      //   queryClient.invalidateQueries({
      //     queryKey: ["all journal"],
      //   });
    },
  });
};

export { useCreateContact };
