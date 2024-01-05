import { useMutation, useQueryClient } from "@tanstack/react-query";
import useQueryNoRefecth from "../hooks/useQueryNoRefetch";
import {
  createJournal,
  deleteJournal,
  getAllJournal,
  getJournalById,
  updateJournal,
} from "../services/journalApi";

const useAllJournal = () =>
  useQueryNoRefecth(["all journal"], async () => await getAllJournal());

const useJournalById = (id) =>
  useQueryNoRefecth(["journal", id], async () => await getJournalById(id));

const useCreateJournal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newData) => createJournal(newData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all journal"],
      });
    },
  });
};

const useUpdateJournal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateJournal(data[0].id, data[1].data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all journal"],
      });
    },
  });
};

const useDeleteJournal = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteJournal(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all journal"],
      });
    },
  });
};

export {
  useAllJournal,
  useJournalById,
  useCreateJournal,
  useDeleteJournal,
  useUpdateJournal,
};
