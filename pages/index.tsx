import Head from 'next/head'
import Image from 'next/image'
import { Box, Center, Button } from '@chakra-ui/react'

export default function Home() {
  const greeting: string = "Hello! My name is Maximo Machado and I am currently a Junior studying Computer Science at MIT. I'd love it if you would checkout some of the projects I've worked on."

  return (
    <>
      <Head>
        <title>Maximo Machado</title>
        <meta name="description" content={greeting} />
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
            <p>{greeting}</p>
            <Button>Projects</Button>
          </Box >
        </Center >
      </main>
    </>
  )
}
