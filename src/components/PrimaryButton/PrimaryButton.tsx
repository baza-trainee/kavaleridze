import { Box, Button } from '@mui/material'
import { FC } from 'react'
import SvgSpriteIcon from './SvgSpriteIcon'

interface PrimaryButtonProps {
  title: string
  svgSpriteId: string
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ title, svgSpriteId }) => {
  return (
    <Box>
      <Button variant="contained" endIcon={<SvgSpriteIcon svgSpriteId={svgSpriteId} />}>
        {title}
      </Button>
    </Box>
  )
}

export default PrimaryButton
