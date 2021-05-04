import NextLink from 'next/link';
import { styled, theme } from '@/local/stitches.config';
import { ComponentProps, FC } from 'react';

export const LinkText = styled('a', {
  position: 'relative',
  fontFamily: '$inter',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontWeight: '$bold',
  textDecoration: 'none',
  color: '$foreground',
  '&:after': {
    content: "''",
    zIndex: -1,
    position: 'absolute',
    backgroundColor: theme.colors.foreground,
    height: '0.15rem',
    width: 'calc(100% + 1px)',
    bottom: '-1.5px',
    left: '-0.5px',
    transition: 'transform 150ms ease-out, background-color 150ms ease'
  },
  '&:hover:after,&:active:after,&:focus:after': {
    backgroundColor: theme.colors.yellow400,
    transform: 'scale(1.5, 10) translateY(calc(-40%)) rotate(0.3deg)',
  },

  variants: {
    weight: {
      bold: {
        fontWeight: '$bold',
        '&:after': {
          height: '0.15rem',
        },
      },
      normal: {
        fontWeight: '$normal',
        '&:after': {
          height: '0.1rem',
        },
        '&:hover:after,&:active:after,&:focus:after': {
          transform: 'scale(1.3, 13) translateY(calc(-40%)) rotate(0.3deg)',
        },
      }
    }
  }
})

export const Link: FC<
  { bold?: boolean; } &
  Omit<ComponentProps<typeof NextLink>, 'passHref'> &
  ComponentProps<typeof LinkText>
> = ({
  children,
  href,
  as: As,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  bold = true,
  ...props
}) => {
  return (
    <NextLink
      href={href}
      as={As}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      passHref>
      <LinkText {...props} weight={bold ? 'bold' : 'normal'}>{children}</LinkText>
    </NextLink>
  )
}
