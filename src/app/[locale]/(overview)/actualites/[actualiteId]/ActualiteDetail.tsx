import React from 'react'
import { formatDateToLocal } from '@/_lib/utils'
import Image from 'next/image'
import { news } from '@/constants'
import { fetchActualites } from '@/_lib/data'

export default async function ActualiteDetail() {
    const data = await fetchActualites()
    console.log({ data });
    
    return (
        <div className='col-span-full lg:col-span-4'>
            <div className='h-72 lg:h-96 xl:h-[560px] relative md:rounded-[18px] overflow-hidden bg-gray-100'>
                <Image
                    alt={news[2].title}
                    src={news[2].image}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className='container max-margin pt-4 md:pt-0 md:px-0 md:mx-0 flex flex-col space-y-3'>
                <div className='flex justify-between pt-4'>
                    <span className='body-3 font-semibold text-primary'>Diocèse</span>
                    <p className='text-gray-400 body-3'>Publié le {formatDateToLocal((new Date()).toISOString())}</p>
                </div>
                <h1 className='heading-3 font-bold'>Quel est le problème avec l'aide médicale à mourir (AMM)? le 9 Octobre 19h</h1>

                <p className='body-2 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia harum voluptas illo sint, nulla consequuntur veritatis officia voluptates, corporis minima, omnis optio dicta iste! Id ipsum itaque adipisci debitis maxime qui voluptates sed recusandae, alias ipsa harum, pariatur dolorum nobis vel cumque repudiandae reprehenderit! Ipsam hic doloremque rem totam facere?</p>

                <p className='body-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellat, eaque ab iusto quaerat cumque et nemo sit nam necessitatibus consectetur eveniet! Quis nostrum est itaque, delectus cupiditate molestias laboriosam. Optio incidunt sed dignissimos?</p>
                <p className='body-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi iusto ex praesentium libero provident accusantium id perspiciatis enim aspernatur aliquam, fugiat blanditiis quos nemo deleniti totam sint sed dolores suscipit eum tempore at numquam a? Quidem dolor, sint consectetur, at impedit sed enim quis dolores aliquid est maxime, quisquam asperiores eligendi architecto iure adipisci facilis? Illum totam modi illo nihil exercitationem? Aspernatur cum esse suscipit eligendi, distinctio provident animi magnam quae soluta beatae fuga id hic, dolore pariatur iure.</p>
                <p className='body-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptates.</p>
                <p className='body-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ullam omnis natus tenetur provident quaerat qui explicabo eos amet in. Praesentium officiis inventore cum modi qui quidem fugiat eligendi aliquid ipsa sapiente ipsam repellat magni tenetur ea suscipit, quod voluptate iusto, quaerat consequatur minima rerum in. Magnam, est odio, earum illo at enim quaerat corrupti dicta fugit eaque libero ipsum. Impedit odio sapiente perferendis autem aperiam ullam sequi dolor tempora veniam, ipsa voluptatum consequuntur! Ad quos dignissimos eligendi tenetur repellendus minima autem esse animi, ullam voluptate ut eaque vitae culpa deleniti? Praesentium maiores vel dolore! Sunt vel obcaecati provident, ratione quisquam commodi, necessitatibus dolores quibusdam eligendi harum et quaerat? Sunt eum distinctio veritatis voluptas, necessitatibus placeat impedit quisquam ab corrupti!</p>
                <p className='body-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sit eos fugiat et vitae, commodi enim, quisquam sint sapiente fuga inventore labore eligendi pariatur velit earum neque. Eum voluptatum omnis accusamus asperiores quidem. Distinctio, culpa est? Fuga velit eius deleniti blanditiis, nobis minima, dolores ipsum reiciendis, animi quae officia consequuntur.</p>
            </div>
        </div>
    )
}
