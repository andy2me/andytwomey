import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import {
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion"

import { styled } from '@/local/stitches.config'
import {
  AnimatedIllustrationTorch,
} from '@/local/components/illustration-hand'
import { Heading, Paragraph } from '@/local/components/typography';
import { Link } from '@/local/components/link';
import { Button } from '@/local/components/button';

const Root = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  variants: {
    layout: {
      'portrait': {
        padding: '$4'
      },
      'landscape': {
        padding: '$6'
      }
    }
  }
})

const ContentContainer = styled('div', {
  flex: '1 0 100%',
  display: 'flex',
  alignItems: 'center',

  variants: {
    layout: {
      'portrait': {
        maxWidth: '405px',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '& > *:last-child': {
          marginTop: '$8'
        }
      },
      'landscape': {
        maxWidth: '881px',
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        '& > *:last-child': {
          marginLeft: '$9'
        }
      },
    },
  },
});

const FooterContainer = styled('div', {
  flex: '0 1 auto',
  display: 'flex',
  width: '100%',

  variants: {
    layout: {
      'portrait': {
        paddingTop: '$5'
      },
      'landscape': {
        paddingTop: '$6',
      }
    }
  }
});

const Body = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  variants: {
    constraints: {
      'portrait': {
      },
      'landscape': {
        justifyContent: 'flex-end',
        paddingBottom: '$8',
      },
    },
  },
});

const ImagePortrait = styled(m.div, {
  display: 'flex',
  flexDirection: 'column',
  flex: '0 0 auto',
  borderRadius: '$2',
  padding: '16px',
  overflow: 'hidden',
  backgroundColor: '$background',
  transform: 'rotate(-2.34deg)',
  filter: 'drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.25))',

  variants: {
    constraints: {
      'portrait': {
        width: '100%',
        minWidth: '300px',
        maxWidth: '405px',
        minHeight: '250px',
        maxHeight: '330px',
      },
      'landscape': {
        width: '405px',
        minWidth: 'initial',
        maxWidth: 'initial',
        height: '506px',
        minHeight: 'initial',
        maxHeight: 'initial',
      },
    },
  },
});

const ImagePortraitInner = styled(m.div, {
  borderRadius: '$1',
  overflow: 'hidden',
  backgroundColor: '$yellow500',

  '& > *:first-child': {
    transition: 'transform 500ms ease',
  },

  variants: {
    constraints: {
      'portrait': {
        width: '100%',
        '& > *:first-child': {
          transform: 'translateY(-50px)',
        },
      },
      'landscape': {
        width: '100%',
        '& > *:first-child': {
          transform: 'initial',
        },
      },
    },
  },
});

const Illustration = styled(AnimatedIllustrationTorch, {
  position: 'absolute',
  top: 0,
  right: 0,

  variants: {
    composition: {
      'mobile': {
        transform: 'translate(0%, -80%)',
      },
      'tablet': {
        transform: 'translate(20%, -60%)',
      },
      'desktop': {
        transform: 'translate(40%, -60%)',
      },
    },
  },
});


const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 90,
  (x - window.innerWidth / 2) / 90
]

export const HomeScreen = () => {
  return (
    <>
      <Head>
        <title>Andy Twomey - Helping Marketers is my schtick.</title>
      </Head>

      <LazyMotion features={domAnimation}>
      <Root layout={{ '@initial': 'portrait', '@bp1': 'landscape' }}>
        <ContentContainer layout={{ '@initial': 'portrait', '@bp1': 'landscape' }}>
          <ImagePortrait constraints={{ '@initial': 'portrait', '@bp1': 'landscape' }}>
            <ImagePortraitInner constraints={{ '@initial': 'portrait', '@bp1': 'landscape' }}>
              <Image
                src="/img/andy-the-hero_gkqyt7.jpg"
                alt="Andy Twomey"
                layout="responsive"
                width={2667}
                height={3394}
              />
            </ImagePortraitInner>
          </ImagePortrait>

          <Body>
            <Illustration composition={{ '@initial': 'mobile', '@bp1': 'tablet', '@torchTabletDesktop': 'desktop' }} />

            <Paragraph css={{ marginBottom: '$3' }}>Hi, I’m Andy.</Paragraph>
            <Heading css={{ marginBottom: '$5' }}>Helping Marketers is my schtick!</Heading>
            <Paragraph css={{ marginBottom: '$3' }}>Actively creating <Link href="https://blog.andytwomey.com" title="Focus">Focus</Link> to help teams plan and execute their work better.
              Director at <Link href="https://yandc.com.au/" title="Y&C Agency">Y&C</Link>, SaaS Growth Agency.</Paragraph>
            <Paragraph css={{ marginBottom: '$3' }}>Find me on <Link bold={false} href="https://linkedin.com/in/andytwomey" title="Andy Twomey on LinkedIn">LinkedIn</Link></Paragraph>
          </Body>
        </ContentContainer>
        <FooterContainer layout={{ '@initial': 'portrait', '@bp1': 'landscape' }}>
          <Button as="a" href="https://blog.andytwomey.com/" title="Andy Twomey's Blog">Read my mutterings.</Button>
        </FooterContainer>
      </Root>
      </LazyMotion>
    </>
  )
}
