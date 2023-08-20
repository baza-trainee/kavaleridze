import { FC } from 'react'

interface SvgSpriteIconProps {
  svgSpriteId: string
  svgSize?: number
}

const SvgSpriteIcon: FC<SvgSpriteIconProps> = ({ svgSpriteId, svgSize }) => {
  return (
    <svg className="icon" style={{ width: `${svgSize}px`, height: `${svgSize}px` }}>
      <use href={`/sprite.svg#${svgSpriteId}`}></use>
    </svg>
  )
}

export default SvgSpriteIcon
