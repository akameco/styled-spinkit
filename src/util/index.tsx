import { css } from 'styled-components'

export const size = (width: string, height: string = width) => css`
  width: ${width};
  height: ${height};
`

export const sizePx = (n: number) => size(`${n}px`)

export interface SizeProps {
  size: number
}

// eslint-disable-next-line no-shadow
export const propSize = ({ size }: SizeProps) => sizePx(size)

export interface BgColorProps {
  color: string
}

export const propBgColor = ({ color }: BgColorProps) => css`
  background-color: ${color};
`

export interface MarginProps {
  size?: number
}

// eslint-disable-next-line no-shadow
export const propMargin = ({ size = 0 }: MarginProps) => css`
  margin: ${size}px auto;
`

export const animationDelay = (n: number) =>
  css`
    animation-delay: ${n}s;
  `

export interface DelayProps {
  delay: number
}

export const propDelay = ({ delay }: DelayProps) => animationDelay(delay)

export const getRange = (n: number): number[] =>
  Array.from<number>(new Array<number>(n).keys())
