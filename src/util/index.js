// @flow
import { css } from 'styled-components'

export const size = (width: string, height?: string = width) => css`
    width: ${width};
    height: ${height};
  `

export const sizePx = (n: number) => size(`${n}px`)

export const propSize = ({ size }: { size: number }) => sizePx(size)

export const propBgColor = ({ color }: { color: string }) => css`
  background-color: ${color};
`

export const propMargin = ({ size = 0 }: { size?: number }) => css`
  margin: ${size}px auto;
`

export const animationDelay = (n: number) => css`
  animation-delay: ${n}s;
`

export const propDelay = ({ delay }: { delay: number }) => animationDelay(delay)

export const getRange = (n: number) => [...Array(n).keys()]
