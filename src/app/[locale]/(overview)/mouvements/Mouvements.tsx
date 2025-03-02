
import React from 'react'
import Mouvement from './Mouvement'
import { fetchMouvements } from '@/_lib/data'

const mouvements = [
    {
        id: 1,
        title: 'chevaliers de Colomb',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 2,
        title: 'Comité diocésain de la Bible',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 3,
        title: 'Mouvement des femmes chrétiennes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 4,
        title: 'Cursillo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 5,
        title: 'Developpement et paix',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 6,
        title: 'La vie montante',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 7,
        title: 'Légion de Marie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 8,
        title: 'Renouveau charismatique',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 9,
        title: 'Service d’animation missionnaire',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 10,
        title: 'Protocole ministère responsable',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 11,
        title: 'Scouts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 12,
        title: 'Service de préparation au mariage',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 13,
        title: 'Société St-Vincent de Paul',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
        id: 14,
        title: 'vivre et aimer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    }

]


export default async function Mouvements() {
    const data = await fetchMouvements()
    console.log({ data });
    
    return (
        <div className="grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
                mouvements.map(mouvement => (
                    <Mouvement mouvement={mouvement} />
                ))
            }
        </div>
    )
}
