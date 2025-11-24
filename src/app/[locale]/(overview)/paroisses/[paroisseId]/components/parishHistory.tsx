"use client"

import { HTMLContent } from '@/components/html-content'
import React from 'react'

export default function ParishHistory({html}: {html: string}) {
  return (
    <HTMLContent html={html} className={`w-full`} />
  )
}
