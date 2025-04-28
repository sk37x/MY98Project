import { useEffect, useRef } from 'react'
import { AspectRatio, Box, Container, Flex, Stack, Title, Text, Image } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
// import './App.css'
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';

function App() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useMediaQuery('(max-width: 36em)');


  useEffect(() => {
    // getWeb()

    // if(iframeRef.current) {
    //   console.log(iframeRef.current.contentWindow);
    //   if(iframeRef.current.contentWindow) 
    //   iframeRef.current.contentWindow.onclick = () => window.open('https://lfbtv.com/goatfootball/', '_blank')
      
    // }
  }, [iframeRef])
  return (
      <Stack gap='0'>
        <Box pos={'fixed'} bottom={'2rem'} right={'-2.5rem'} style={{zIndex:999}} display='none'>
          <Image src='./images/line_icon.png' alt='line' w='50%' h='50%' style={{cursor:'pointer'}} onClick={() => window.open('https://line.me/R/ti/p/@394hftis?oat_content=url&ts=07190514', '_blank')} />
        </Box>


        {/* carousel */}
        <Box w='100%' h='100%'>
          <Carousel
            withIndicators
            height='auto'
            mah={'100%'}
            plugins={[autoplay.current]}
            slideSize="100%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={1}
            draggable={false} 
            withControls={false}
          >
            <Carousel.Slide>
                  <img src={'./images/header1.png'} alt='header1' width='100%' height='100%' />
            </Carousel.Slide>
            <Carousel.Slide>
                  <img src={'./images/header2.png'} alt='header2' width='100%' height='100%' />
            </Carousel.Slide>
            <Carousel.Slide>
                  <img src={'./images/header3.png'} alt='header3' width='100%' height='100%' />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
        </Box>

      </Stack>
  )
}


export default App