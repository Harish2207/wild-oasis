import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nsokyjwuwcsocigajrvi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zb2t5and1d2Nzb2NpZ2FqcnZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxODU2ODEsImV4cCI6MjAwNTc2MTY4MX0.-5C8zOa5PZrGs4r71H7zA8thCIr6OLNpTvpbNq3RY0A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
