"use client"

import Text from "@/components/Text";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/shared/button";
import { InfoIcon, Play, PlusIcon } from "lucide-react";
import React, { useState } from "react";

interface VideoPlayerProps {
  video: string,
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  const [openModal, setOpenModal] = useState(false)

  const embedUrl = video.replace("watch?v=", "embed/"); // Convertir l'URL en URL d'intégration
  // const embedUrl = video.media.replace("watch?v=", "v/");


  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>
        <Button onClick={( ) => setOpenModal(true)}
            variant="outline" size="sm" className="w-full md:w-auto text-xs lg:text-sm">
            <Play className="mr-2 h-4 w-6" />
            <Text keyString="visit_parish_video" />
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="max-w-4xl p-3 rounded-2xl">
        <DialogClose className="absolute border-none w-5 h-5 top-[14px] right-[14px]">
        </DialogClose>
        <DialogHeader className='hidden'>
            <DialogTitle></DialogTitle>
        </DialogHeader>
        
        <div className='w-full max-h-[calc(70vh)] z-[5] bg-[#f0f0f0] self-stretch relative rounded-xl overflow-hidden'>
          <Button 
            onClick={() => setOpenModal(false)}
            variant={'outline'} 
            className="bg-white p-0 absolute z-10 top-2 right-2 h-10 w-10 justify-center items-center rounded-full">
            <PlusIcon className="w-5 h-5 rotate-45" />  
          </Button>
          
          <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src={embedUrl}
              title={embedUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className='flex justify-between items-center gap-3'>
            <Button variant={"ghost"} onClick={() => setOpenModal(false)} className="px-3.5 py-0 text-white rounded-[7px]">
                <span className="font-body-3 whitespace-nowrap">
                    Fermer
                </span>
            </Button>
            
            <div className='flex items-center gap-1'>
                <InfoIcon className='h-5 w-5' />
                <p className='text-gray'>{video}</p>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};