import Head from 'next/head'
import React from 'react';
import {
  LazyMotion,
  domAnimation,
} from "framer-motion"

import { styled } from '@/local/stitches.config'
import {
  AnimatedIllustrationTorch,
} from '@/local/components/illustration-torch'
import { Heading, Paragraph } from '@/local/components/typography';
import { Link } from '@/local/components/link';

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

export const NotFoundScreen = () => {
  return (
    <>
      <Head>
        <title>Andy Twomey - Helping Marketers is my schtick.</title>
      </Head>

      <LazyMotion features={domAnimation}>
      <Root layout={{ '@initial': 'portrait', '@bp1': 'landscape' }}>
        <ContentContainer layout={{ '@initial': 'portrait', '@bp1': 'landscape' }}>
          <Body>
            <Illustration composition={{ '@initial': 'mobile', '@bp1': 'tablet', '@torchTabletDesktop': 'desktop' }} />

            <Heading css={{ marginBottom: '$5' }}>Page not found</Heading>
            <Paragraph css={{ marginBottom: '$3' }}>Check out my <Link href="/" title="Andy Twomey's Landing Page">landing page</Link>. Or, find me on <Link bold={false} href="https://linkedin.com/in/andytwomey" title="Andy Twomey on LinkedIn">LinkedIn</Link>.</Paragraph>
          </Body>
        </ContentContainer>
      </Root>
      </LazyMotion>
    </>
  )
}
