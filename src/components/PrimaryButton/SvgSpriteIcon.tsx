import { FC } from 'react'

interface SvgSpriteIconProps {
  svgSpriteId: string
}

const SvgSpriteIcon: FC<SvgSpriteIconProps> = ({ svgSpriteId }) => {
  return (
    <svg className="icon">
      <use href={`/sprite.svg#${svgSpriteId}`}></use>
    </svg>
  )
}

export default SvgSpriteIcon
