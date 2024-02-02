// icons
import {
    RxCrop,
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
    RxArrowTopRight,
} from 'react-icons/rx'
import { Swiper, SwiperSlide } from 'swiper/react'
// swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper'

// data
const serviceData = [
    {
        icon: <RxCrop />,
        title: 'Frontend',
        description:
            'The construction of Landing Pages and interactive and dynamic interfaces are my differential',
    },
    {
        icon: <RxPencil2 />,
        title: 'Design',
        description:
            'Rely on prototype design for a basic demonstration of your project',
    },
    {
        icon: <RxDesktop />,
        title: 'Development',
        description:
            'Sua imaginação e críterios são contemplados com minhas habilidades em desenvolvimento',
    },

    {
        icon: <RxRocket />,
        title: 'SEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
]

const ServiceSlider = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className='h-[240px] sm:h-[360px]'
        >
            {serviceData.map((service, index) => (
                <SwiperSlide key={index}>
                    <div
                        className='bg-[rgba(65,47,123,0.15)] p-2 h-max rounded-lg px-6 sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(65,47,123,0.30)] 
                    transtion-all duration-300'
                    >
                        {/* icon */}
                        <div className='text-4xl text-accent mb-4'>
                            {service.icon}
                        </div>
                        {/* title */}
                        <div className='mb-8 '>
                            <div className='text-lg mb-2'>{service.title}</div>
                            <p className='max-w-[350px] leading-normal'>
                                {service.description}
                            </p>
                        </div>
                        {/* arrow */}
                        <div className='text-3xl'>
                            <RxArrowTopRight className='group hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ServiceSlider
