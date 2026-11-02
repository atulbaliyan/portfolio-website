import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
export default function Reveal({children,className=''}:{children:ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div className={className} initial={reduced?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.5}}>{children}</motion.div>}
