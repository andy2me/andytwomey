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
} from '@/local/components/illustration-torch'
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
  flex: '0 0 auto',
  borderRadius: '$1',
  overflow: 'hidden',
  backgroundColor: '#fff9d7',

  '& > *:first-child': {
    transition: 'transform 500ms ease',
  },

  variants: {
    constraints: {
      'portrait': {
        width: '100%',
        minWidth: '300px',
        maxWidth: '405px',
        minHeight: '250px',
        maxHeight: '330px',
        '& > *:first-child': {
          transform: 'translateY(-50px)',
        },
      },
      'landscape': {
        width: '405px',
        minWidth: 'initial',
        maxWidth: 'initial',
        height: '515px',
        minHeight: 'initial',
        maxHeight: 'initial',
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
        transform: 'translate(20%, -80%)',
      },
      'desktop': {
        transform: 'translate(90%, -60%)',
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
            <Image
              src="/img/andy-the-hero_gkqyt7.jpg"
              alt="Andy Twomey"
              layout="responsive"
              width={2667}
              height={3394}
            />
          </ImagePortrait>

          <Body>
            <Illustration composition={{ '@initial': 'mobile', '@bp1': 'tablet', '@torchTabletDesktop': 'desktop' }} />

            <Paragraph css={{ marginBottom: '$3' }}>Hi, I’m Andy.</Paragraph>
            <Heading css={{ marginBottom: '$5' }}>Helping Marketers is my schtick!</Heading>
            <Paragraph css={{ marginBottom: '$3' }}>Actively building <Link href="https://getfocus.co/" title="Visual Analytics Platform">Focus</Link> to help teams plan and execute their work better.
              Director at <Link href="https://weareync.co/" title="We Are YNC">YNC</Link>, SaaS Growth Agency.</Paragraph>
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
