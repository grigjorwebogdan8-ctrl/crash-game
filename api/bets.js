export const config = {
  runtime: 'edge',
}

import { supabase } from '../supabase.js'

export default async function handler(req) {
  const url = new URL(req.url)
  const userId = url.searchParams.get('userId')

  const { data, error } = await supabase
    .from('bets')
    .select('*')
    .eq('user_id', userId)

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 400 })
  }

  return new Response(JSON.stringify(data), { status: 200 })
}
