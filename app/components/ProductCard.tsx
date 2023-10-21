"use client"
import React, { useState } from 'react';
import { HeartIcon } from './icons';
import Image from 'next/image';
import PrimaryBtn from './PrimaryBtn';
import cn from 'classnames'

type Props = {
  hasBgImg?: boolean;
  isRegalato?: boolean;
  isBtnDisabled?: boolean;
  productTitle?: string;
  productDesc?: string;
  productImg?: string;
  onBtnClick?: () => void;
}

const ProductCard: React.FC<Props> = ({ hasBgImg, isRegalato, isBtnDisabled, productTitle, productDesc, productImg, onBtnClick }) => {
  let [isLiked, setIsLiked] = useState<boolean>(false)

  return (
    <>
      <div className={cn('bg-white sm:py-8 py-5 rounded-[20px] md:w-[438px] w-full overflow-hidden shadow-card-shadow', {
        "sm:px-5 px-[30px]": !hasBgImg,
        "px-0": hasBgImg
      })}>
        <div className="flex flex-wrap">
          <div className={cn("w-full flex items-center justify-between mb-9 relative z-10", {
            "px-5": hasBgImg,
            "px-0": !hasBgImg
          })}>
            {isRegalato && (
              <p className='bg-primary py-2 px-5 rounded-2xl text-lg text-white font-bold'>
                Regalato
              </p>
            )}
            {!isRegalato && (
              <p className='bg-primary-bg py-2 px-5 rounded-2xl sm:text-lg text-sm text-titles font-light'>
                Scade tra: <span className='font-bold'>02:20:35</span>
              </p>
            )}
            <button className='p-2 rounded-2xl bg-primary-bg outline-none focus:outline-none' onClick={() => setIsLiked(isLiked = !isLiked)}>
              <HeartIcon isFilled={isLiked} />
            </button>
          </div>
          {!hasBgImg && (
            <div className="w-full flex items-center justify-center">
              <Image src={productImg!} alt='product img' width={174} height={221} />
            </div>
          )}
          {hasBgImg && (
            <div className={`w-full max-h-[300px] md:-mt-[117px] sm:-mt-[140px] -mt-[117px] z-[0] overflow-hidden`}>
              <Image src='/product-2.png' alt='product img' width={800} height={800} />
            </div>
          )}
          <div className={cn("w-full relative z-10 md:my-10 my-5", {
            "px-5": hasBgImg,
            "px-0": !hasBgImg
          })}>
            <h2 className='sm:text-2xl text-[22px] font-semibold text-titles leading-[29px] mb-2'>{productTitle}</h2>
            <p className='sm:text-lg text-base text-titles font-light leading-5'>{productDesc}</p>
          </div>
          <div className="w-full flex justify-center items-center relative z-10">
            <PrimaryBtn disabled={isBtnDisabled} onClick={onBtnClick}>
              Regalatelo!
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard;
