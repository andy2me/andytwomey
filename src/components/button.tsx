import { styled } from '@/local/stitches.config';

export const Button = styled('button', {
  position: 'relative',
  appearance: 'none',
  padding: '8px 14px',
  fontFamily: '$inter',
  fontSize: '$1',
  lineHeight: '$1',
  fontWeight: '$normal',
  border: '0',
  color: '$foreground',
  backgroundColor: '$pink400',
  borderRadius: '$round',
  transition: 'transform 350ms ease, color 200ms ease, background-color 200ms ease',
  overflow: 'hidden',
  '&:hover,&:active,&:focus': {
    transform: 'translate(2px, -4px) rotate(-2deg)',
    color: '$background',
    backgroundColor: '$foreground',
  }
})
