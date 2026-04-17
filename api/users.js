export const config = {
  runtime: 'edge',
}

import { supabase } from '../supabase.js'

export default async function handler(req) {
  const { data, error } = await supabase.from('users').select('*')

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 400 })
  }

  return new Response(JSON.stringify(data), { status: 200 })
}
