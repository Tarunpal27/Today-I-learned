import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://egkmbyicbolieedvnagi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVna21ieWljYm9saWVlZHZuYWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0OTYwMzYsImV4cCI6MjAwNzA3MjAzNn0.vmHnp-Eif1Xfzl8FspkiwR4GAuPW22JT3J0l7Dv4AJs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
