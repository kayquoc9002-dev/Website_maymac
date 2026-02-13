import { createClient } from '@supabase/supabase-js'

// Lấy 2 thông số này ở Settings > API trong Dashboard Supabase
const supabaseUrl = 'https://rkspmevgdzayboqqktbg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrc3BtZXZnZHpheWJvcXFrdGJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MjI4NTcsImV4cCI6MjA4NjI5ODg1N30.uiZFmJwayBZ9Vx3sJpe5hLnXWsuzS0sQgSj7Gax5Dos'

export const supabase = createClient(supabaseUrl, supabaseKey)