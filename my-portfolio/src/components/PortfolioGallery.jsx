import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './CSS/PortfolioGallery.css'

const PortfolioGallery = ({images}) => {

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={20}       // スライド間の余白(px)
      slidesPerView={1}       // 一度に表示する枚数
      centeredSlides={true}
      navigation              // 左右の矢印を表示
      loop={true}             // 無限ループ
    >
        {images.map((image=><SwiperSlide  key={image.id}>
            <img src={image.image} alt={image.alt} />
            </SwiperSlide>))}
    </Swiper>
  );
}

export default PortfolioGallery