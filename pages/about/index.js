// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaFigma } from 'react-icons/fa'

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from 'react-icons/si'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants.js'
import Avatar from '../../components/Avatar.js'
import { useState } from 'react'
import CountUp from 'react-countup'
//import CountUp from "react-countup/build/CountUp.js";

//  data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [
                    <FaHtml5 />,
                    <FaCss3 />,
                    <FaJs />,
                    <FaReact />,
                    <SiNextdotjs />,
                    <SiFramer />,
                    <FaJava />,
                ],
            },
        ],
    },
    {
        title: 'Certificações',
        info: [
            {
                title: 'Capacitação em Gestão de Projetos Ágeis',
                stage: '2023',
            },
            {
                title: 'Capacitação em Inteligência Artificial',
                stage: '2023',
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'Estágio em Desenvolvimento Web',
                stage: 'Junho 2023 até Atualmente',
            },
            {
                title: 'Monitoria em Lógica de Programação',
                stage: 'Dezembro 2022 até Atualmente',
            },
            {
                title: 'Estágio em Desenvolvimento de Sistemas',
                stage: 'Junho 2022 até Novembro 2022',
            },
        ],
    },
    {
        title: 'Formação',
        info: [
            {
                title: 'Análise e Desenvolvimento de Sistemas (IFBA)',
                stage: '2022',
            },
        ],
    },
]

const About = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className='h-full  bg-primary/30 py-32 text-center xl:text-left'>
            <Circles />
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='hidden xl:flex absolute bottom-0 -left-[370px]'
            >
                <Avatar />
            </motion.div>
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
                <div className='flex-1 flex flex-col justify-center'>
                    <h2 className='h2'>
                        Capitivation{' '}
                        <span className='text-accent'> stories</span> birth
                        magnificant designs.
                    </h2>

                    <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
                        2 Years ago, I began in Analysis and Development Systems
                        in Instituto Federal da Bahia. Now i work with web
                        development
                    </p>

                    {/* counters */}
                    <div>
                        <div className='flex flex-1 xl:gap-x-6'>
                            {/* experience */}
                            <div className='relative flex-1'>
                                <div className='text-2xl xl:text-4xl font font-extrabold text-accent mb-3 '>
                                    {' '}
                                    <CountUp start={0} end={3} duration={4} />
                                </div>
                                <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Years of Experience
                                </div>
                            </div>

                            {/* experience */}
                            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 '>
                                <div className='text-2xl xl:text-4xl font font-extrabold text-accent mb-3 '>
                                    {' '}
                                    <CountUp start={0} end={3} duration={4} />
                                </div>
                                <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                    Years of Experience
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col w-full xl:max-w-[48%] h-[480px]'>
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {aboutData.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                className={`${
                                    index === itemIndex &&
                                    'text-accent after:bg-accent after:transition-all after:duration-300'
                                } 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] 
               after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                onClick={() => setIndex(itemIndex)}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>

                    <div className=' py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center'
                            >
                                <div className='font-light mb-2 md:mb-0'>
                                    {item.title}
                                </div>
                                <div className='hidden md:flex '>-</div>
                                <div>{item.stage}</div>
                                {/* icons */}
                                <div className='flex gap-x-4'>
                                    {item.icons?.map((icon, iconIndex) => (
                                        <div
                                            key={iconIndex}
                                            className='text-2xl'
                                        >
                                            {icon}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
