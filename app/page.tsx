"use client"
import { Fragment, useEffect, useRef, useState } from "react";
import ProductCard from "./components/ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ArrowIcon } from "./components/icons";
import Popup from "./components/Popup";

interface IProductCard {
  id?: string | number;
  productTitle?: string;
  productImg?: string;
  productDesc?: string;
  hasBgImg?: boolean;
  isDisabled?: boolean;
  isRegalato?: boolean;
}

export default function Home() {
  const slider = useRef<any>(null)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [products, _setProducts] = useState<IProductCard[]>([
    {
      id: 1,
      productTitle: 'Cuffie Wireless',
      productDesc: 'Regalo cuffie Jabra xts 5 in zona Roma, mai usate, disposto anche a spedirle',
      productImg: '/product.png',
      isDisabled: false,
      isRegalato: false,
      hasBgImg: false
    },
    {
      id: 2,
      productTitle: 'Smartwatch',
      productDesc: 'Regalo smartwatch usato ma perfettamente funzionante',
      productImg: '/product.png',
      isDisabled: true,
      isRegalato: true,
      hasBgImg: false
    },
    {
      id: 3,
      productTitle: 'Custodia airpord seconda generazione',
      productDesc: 'Regalo custoda airpords perfettamente funzionante',
      productImg: '/product-2.png',
      isDisabled: false,
      isRegalato: false,
      hasBgImg: true
    },
    {
      id: 4,
      productTitle: 'Cuffie Wireless',
      productDesc: 'Regalo cuffie Jabra xts 5 in zona Roma, mai usate, disposto anche a spedirle',
      productImg: '/product.png',
      isDisabled: false,
      isRegalato: false,
      hasBgImg: false
    },
    {
      id: 5,
      productTitle: 'Smartwatch',
      productDesc: 'Regalo smartwatch usato ma perfettamente funzionante',
      productImg: '/product.png',
      isDisabled: true,
      isRegalato: true,
      hasBgImg: false
    },
    {
      id: 6,
      productTitle: 'Custodia airpord seconda generazione',
      productDesc: 'Regalo custoda airpords perfettamente funzionante',
      productImg: '/product-2.png',
      isDisabled: false,
      isRegalato: false,
      hasBgImg: true
    },
  ])

  useEffect(() => {
    if (showModal) document.documentElement.style.overflow = 'hidden'
    else document.documentElement.style.overflow = 'auto'
  }, [showModal])

  return (
    <main className='py-20 bg-primary-bg min-h-screen overflow-hidden'>
      <div className="container mx-auto xl:px-0 md:px-6 px-4">
        <div className="flex flex-wrap">
          <div className="w-full mb-16">
            <h1 className="text-[44px] text-titles font-semibold">Altri Regali</h1>
          </div>
          <div className="w-full relative md:flex hidden items-center">
            <button className="w-[100px] h-[100px] bg-white rounded-full items-center justify-center absolute -left-32 2xl:flex hidden" onClick={() => slider.current.swiper.slidePrev()}>
              <ArrowIcon />
            </button>
            <button className="w-[100px] h-[100px] bg-white rounded-full items-center justify-center absolute -right-32 transform rotate-180 2xl:flex hidden" onClick={() => slider.current.swiper.slideNext()}>
              <ArrowIcon />
            </button>
            <Swiper
              spaceBetween={100}
              slidesPerView={1}
              loop
              breakpoints={{
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 100
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              ref={slider}
            >
              {products.map((product: IProductCard, index: number) => {
                return (
                  <Fragment key={`${index}${product.id}`}>
                    <SwiperSlide>
                      <ProductCard productImg={product.productImg} productTitle={product.productTitle} productDesc={product.productTitle} isBtnDisabled={product.isDisabled} isRegalato={product.isRegalato} hasBgImg={product.hasBgImg} onBtnClick={() => setShowModal(true)} />
                    </SwiperSlide>
                  </Fragment>
                )
              })}
            </Swiper>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 md:hidden w-full gap-8">
            {products.map((product: IProductCard, index: number) => {
              if (index > 2) {
                return (
                  <Fragment key={`${index}${product.id}`}>
                    <div className="w-full">
                      <ProductCard productImg={product.productImg} productTitle={product.productTitle} productDesc={product.productTitle} isBtnDisabled={product.isDisabled} isRegalato={product.isRegalato} hasBgImg={product.hasBgImg} onBtnClick={() => setShowModal(true)} />
                    </div>
                  </Fragment>
                )
              }
            })}
          </div>
        </div>
      </div>
      {showModal && <Popup onCrossClick={() => setShowModal(false)} onSubmitClick={() => setShowModal(false)} />}
    </main>

  )
}
