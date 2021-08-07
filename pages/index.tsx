import Head from 'next/head'
import Image from 'next/image'
import { Box, Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Maximo Machado</title>
        <meta name="description" content="A website featuring software developer and photographer Maximo Machado." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Center >
          <Image
            src="/images/profile.png"
            alt="Picture of Maximo Machado"
            width={100}
            height={100}
          />
          <Box >
            <h1>
              Maximo Machado '23
            </h1>
            <p>
              Hello! I'm currently majoring in Computer Science at MIT.
              Software development and programming is something I've loved since I was a kid, budding from my interests in playing and creating video games.
            </p>
          </Box >
        </Center >
      </main>
    </>
  )
}
