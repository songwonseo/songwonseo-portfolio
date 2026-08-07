import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props { href?:string; to?:string; children:ReactNode; variant?:'primary'|'secondary'|'text'; external?:boolean; disabled?:boolean; state?:unknown }
export function ButtonLink({href,to,children,variant='primary',external=false,disabled=false,state}:Props) {
  const className = `button button--${variant}${disabled ? ' is-disabled' : ''}`
  if (disabled) return <span className={className} aria-disabled="true">{children}<small>준비 중</small></span>
  if (to) return <Link className={className} to={to} state={state}>{children}</Link>
  return <a className={className} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}</a>
}
