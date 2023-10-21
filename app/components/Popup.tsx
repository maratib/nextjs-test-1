"use client"
import React from 'react'
import { CrossIcon } from './icons'
import PrimaryBtn from './PrimaryBtn'

type Props = {
  onCrossClick?: () => void;
  onSubmitClick?: () => void;
}

const Popup: React.FC<Props> = ({ onCrossClick, onSubmitClick }) => {
  return (
    <>
      <div className='fixed h-screen w-full flex items-center justify-center bg-black/70 backdrop-blur-lg inset-0 z-[999]'>
        <div className="container mx-auto bg-white px-[200px] py-[90px] rounded-[20px] shadow-card-shadow relative">
          <button className='bg-transparent outline-none focus:outline-none absolute top-[53px] right-[52px]' onClick={onCrossClick}>
            <CrossIcon />
          </button>
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <h2 className='text-titles text-[64px] font-semibold'>Spedizione</h2>
            </div>
            <div className='grid md:grid-cols-3 my-28 w-full md:gap-[100px] gap-20'>
              <div className='flex flex-col'>
                <label className='text-titles text-[22px] font-semibold mb-[10px]'>Name</label>
                <input type="text" className='border border-titles h-[51px] text-titles rounded-[10px] px-5 py-[5px] placeholder:opacity-50 w-full' placeholder='II tuo nome' />
              </div>
              <div className='flex flex-col'>
                <label className='text-titles text-[22px] font-semibold mb-[10px]'>Cognome</label>
                <input type="text" className='border border-titles h-[51px] text-titles rounded-[10px] px-5 py-[5px] placeholder:opacity-50 w-full' placeholder='I tuo cognome' />
              </div>
              <div className='flex flex-col'>
                <label className='text-titles text-[22px] font-semibold mb-[10px]'>Nazione</label>
                <input type="text" className='border border-titles h-[51px] text-titles rounded-[10px] px-5 py-[5px] placeholder:opacity-50 w-full' placeholder='Inserisci città' />
              </div>
              <div className='flex flex-col'>
                <label className='text-titles text-[22px] font-semibold mb-[10px]'>Città</label>
                <input type="text" className='border border-titles h-[51px] text-titles rounded-[10px] px-5 py-[5px] placeholder:opacity-50 w-full' placeholder='Inserisci città' />
              </div>
              <div className='grid grid-cols-2 gap-12'>
                <div className='flex flex-col'>
                  <label className='text-titles text-[22px] font-semibold mb-[10px]'>Provincia</label>
                  <select className='border border-titles h-[51px] text-titles rounded-[10px] pl-2 py-[5px] placeholder:opacity-50 w-full'>
                    <option value="province 1">province 1</option>
                    <option value="province 2">province 2</option>
                    <option value="province 3">province 3</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label className='text-titles text-[22px] font-semibold mb-[10px]'>Cap</label>
                  <input type="text" className='border border-titles h-[51px] text-titles rounded-[10px] px-5 py-[5px] placeholder:opacity-50 w-full' placeholder='Inserisci cap' />
                </div>
              </div>
              <div className='flex flex-col'>
                <label className='text-titles text-[22px] font-semibold mb-[10px]'>Via</label>
                <input type="text" className='border border-titles h-[51px] text-titles rounded-[10px] px-5 py-[5px] placeholder:opacity-50 w-full' placeholder='Inserisci via' />
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <PrimaryBtn onClick={onSubmitClick}>Pagamento Spedizione</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popup
