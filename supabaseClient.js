import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://keklbemtoccmveisaxio.supabase.co'; // Found in your Supabase dashboard
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtla2xiZW10b2NjbXZlaXNheGlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5MTM1MzIsImV4cCI6MjA1MzQ4OTUzMn0.WJziD52bBPzf4QDXVXMzAwpZFsS18gAGywB0Jr_k4gs'; // Found in your Supabase dashboard under API > Project API Keys

export const supabase = createClient(supabaseUrl, supabaseKey);