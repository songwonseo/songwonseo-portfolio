import { useEffect } from 'react'
import { About } from '../components/home/About'
import { Contact } from '../components/home/Contact'
import { Experience } from '../components/home/Experience'
import { Hero } from '../components/home/Hero'
import { Projects } from '../components/home/Projects'
import { Skills } from '../components/home/Skills'
export function HomePage(){useEffect(()=>{const observer=new IntersectionObserver((entries)=>entries.forEach((e)=>{if(e.isIntersecting)e.target.classList.add('is-visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach((el)=>observer.observe(el));if(location.hash)setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView(),60);return()=>observer.disconnect()},[]);return <main><Hero/><About/><Skills/><Experience/><Projects/><Contact/></main>}
