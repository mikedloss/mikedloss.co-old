import type { APIRoute } from 'astro'
import { v4 as uuidv4 } from 'uuid'
import { supabase } from '../../../lib/supabase'

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData()
  const name = formData.get('name')?.toString()
  const email = formData.get('email')?.toString()
  const company = formData.get('company')?.toString()
  const description = formData.get('description')?.toString()

  if (!name || !email || !company || !description) {
    return new Response('All fields are required', { status: 400 })
  }

  console.log('in server', { name, email, company, description })

  // const { error } = await supabase.from('contacts').insert({
  //   name,
  //   email,
  //   company,
  //   description,
  // })

  // if (error) {
  //   return new Response(error.message, { status: 500 })
  // }

  return redirect('/#contact?form=success')
}
