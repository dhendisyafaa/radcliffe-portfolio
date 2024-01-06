import { baseUrlApi } from "@/configs/config";
import axios from "axios";
import supabase from "supabase";

const createContact = (data) => {
  return supabase.from("Contact").insert([data]).select();
};

export { createContact };
