import Contact from './components/Contact';
import { motion, useScroll, useReducedMotion } from 'motion/react';
import {About, Toolbox, Experience} from './components/Background';
import Work from './components/Work';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
export default function App(){const {scrollYProgress}=useScroll();const reduced=useReducedMotion();return <><a className="skip" href="#main">Skip to content</a><Navigation/>{!reduced&&<motion.div className="scroll-progress" style={{scaleX:scrollYProgress}}/>}<main id="main"><Hero/><About/><Work/><Toolbox/><Experience/><Contact/></main></>}
