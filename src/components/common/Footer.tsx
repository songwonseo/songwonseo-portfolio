import { ArrowUp } from 'lucide-react'
export function Footer(){return <footer className="footer"><div className="container"><p>© 2026 Song Won Seo. All rights reserved.</p><button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="페이지 상단으로"><ArrowUp/></button></div></footer>}
