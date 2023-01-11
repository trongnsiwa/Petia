import { createClient } from '@supabase/supabase-js';

// .env file
const supbaseUrl = import.meta.env.VITE_PUBLIC_SUPABSE_URL;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supbaseUrl, supabaseAnonKey);
