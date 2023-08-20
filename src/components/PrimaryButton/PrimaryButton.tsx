import { Box, Button } from '@mui/material'
import { FC } from 'react'
import SvgSpriteIcon from './SvgSpriteIcon'

interface PrimaryButtonProps {
  title: string
  svgSpriteId: string
  href: string
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, svgSpriteId, href }) => {
  return (
    <Box>
      <Button
        href={href}
        target="_blank"
        variant="contained"
        endIcon={<SvgSpriteIcon svgSpriteId={svgSpriteId} />}
      >
        {title}
      </Button>
    </Box>
  )
}

export default PrimaryButton
