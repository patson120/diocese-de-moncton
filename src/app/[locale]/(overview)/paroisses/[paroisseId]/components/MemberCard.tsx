"use client"

import Image from "next/image"
import { PretresDialog } from "../../../clerges/member-comp"
import { Membre } from "@/types"
import { useState } from "react"

export default function MembreCard({ membre }: { membre: Membre }) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div onClick={() => setOpen(prev => !prev)}  className="flex items-center gap-4 mb-4 cursor-pointer">
                <div className="h-12 w-12 relative overflow-hidden rounded-full bg-gray-100">
                    {
                        membre.image ?
                        <Image
                            alt={`${membre.nom}`}
                            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${membre.image}`}
                            fill
                            style={{
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%'
                            }}
                        />
                        :
                        <div className="h-12 w-12 flex justify-center items-center bg-gray-200 text-gray-500">
                            <span className="text-xl">{membre.nom.charAt(0)}</span>
                        </div>
                    }
                </div>
                <div>
                    <h3 className="font-semibold">{membre.nom}</h3>
                    <p className="text-sm text-gray-500">{membre.poste}</p>
                </div>
            </div>
            <PretresDialog open={open} onOpenChange={setOpen} member={membre} />
        </>
    )
}