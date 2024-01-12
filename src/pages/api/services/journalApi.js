import { baseUrlApi } from "@/configs/config";
import axios from "axios";
import supabase from "supabase";

const getAllJournal = () => {
  return supabase.from("Journal").select();
};

const getJournalById = (id) => {
  return supabase.from("Journal").select().eq("id", id);
};

const createJournal = (data) => {
  return supabase.from("Journal").insert([data]).select();
};

const updateJournal = (id, data) => {
  return axios.patch(`${baseUrlApi}/journals/${id}`, data);
};

const deleteJournal = (id) => {
  return axios.delete(`${baseUrlApi}/journals/${id}`);
};

export {
  createJournal,
  getJournalById,
  deleteJournal,
  getAllJournal,
  updateJournal,
};
