'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/shared/button';
import { subscribeToNewsletter } from '@/_lib/data';
import { useToast } from '@/hooks/use-toast';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const { toast: hookToast } = useToast();

  const handleSubmit = async () => {
    // Send email to the server
    console.log('Sending email to', email);
    const response = await subscribeToNewsletter({ email: email });
    if (response.email) {
      setEmail(''); // Clear the input field
      toast.success('Merci pour votre abonnement à notre newsletter !')
    }
    else {
      // toast(response.message)
      // hookToast({ title: response.message })
      toast.error(response.message)
    }
  }

  return (
    <section className='vertical-margin w-full bg-white'>
      <div className='container max-margin py-0 flex flex-col md:flex-row justify-between gap-3'>
        <div className='text-black'>
          <h3 className='body-1 font-bold'>Newsletter</h3>
          <p className='text-[#575757] body-2'>Abonnez-vous à notre newsletter pour obtenir les <br className='hidden lg:block' />nouveautés sur l&lsquo;église.</p>
        </div>
        <div className='flex flex-col md:flex-row items-end md:items-center space-y-3 md:space-y-0 md:space-x-2'>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adresse email" className="border-2 border-gray-200 p-2 rounded-[12px] w-full" />

          <Button onClick={handleSubmit} className="w-full md:w-auto px-3 md:px-6 py-2 body-3">
            Je m&lsquo;abonne
          </Button>
        </div>
      </div>
    </section>
  )
}
