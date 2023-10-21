"use client"
import { Fragment, useRef, useState } from "react";
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

  return (
    <main className='py-20 bg-primary-bg h-screen'>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full mb-16">
            <h1 className="text-[44px] text-titles font-semibold">Altri Regali</h1>
          </div>
          <div className="w-full relative flex items-center">
            <button className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center absolute -left-36" onClick={() => slider.current.swiper.slidePrev()}>
              <ArrowIcon />
            </button>
            <button className="w-[100px] h-[100px] bg-white rounded-full flex items-center justify-center absolute -right-36 transform rotate-180" onClick={() => slider.current.swiper.slideNext()}>
              <ArrowIcon />
            </button>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              loop
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
        </div>
      </div>
      {showModal && <Popup onCrossClick={() => setShowModal(false)} onSubmitClick={() => setShowModal(false)} />}
    </main>

  )
}
