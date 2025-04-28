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
        <Box pos={'fixed'} bottom={'2rem'} right={'-2.5rem'} style={{zIndex:999}}>
          <Image src='./images/line_icon.png' alt='line' w='50%' h='50%' style={{cursor:'pointer'}} onClick={() => window.open('https://line.me/R/ti/p/@394hftis?oat_content=url&ts=07190514', '_blank')} />
        </Box>

        <Box bg='black' h={{xxs:'auto', md:'229px'}} w='100%' pos='relative' p={{xxs:'lg', md:'sm'}}>
          <Box h='100%' pos='relative'>
            <Flex align={'center'} justify={'center'} w='100%' h='100%' pos='relative'>
              <AspectRatio ratio={4} maw={{xxs:"200px", md:"350px"}} mah={{xxs:"200px", md:"350px"}} style={{zIndex:'99'}}>
                <img src={'./images/GT-logo.png'} alt='logo'   />
              </AspectRatio>
            </Flex>
        
              {/* <Box h={{md:'200px'}} style={{width:'100%', position:'sticky', top:0, display:'flex', alignItems:'center', justifyContent:'center', left:'-185px' }}>
                  <img src={'./images/rec1.png'} alt='rec1' width={'100%'} height='100%' />
              </Box>
              <Box h={{md:'200px'}} style={{width:'100%', position:'sticky', top:0, display:'flex', alignItems:'center', justifyContent:'center', right:'-185px' }}>
                <img src={'./images/rec2.png'} alt='rec1'  width={'100%'} height='100%' />
              </Box> */}
            <Flex align={'center'} justify={'center'} w='100%'>
              <Box w={{xxs:'115px', md:'350px'}} h={{xxs:'85px', md:'155px'}} bg='#FF0000CC' pos='absolute' bottom={0} style={{filter:'drop-shadow(0px 25px 40px red) blur(60px)', borderRadius:'200px', zIndex:'0'}} top='-132px' mr={{xxs:'100px', md:'250px'}}></Box>
              <Box w={{xxs:'115px', md:'350px'}} h={{xxs:'85px', md:'155px'}} bg='#47A1F9' pos='absolute' bottom={0} style={{filter:'drop-shadow(0px 25px 40px red) blur(60px)', borderRadius:'200px', zIndex:'0'}} top='-132px' ml={{xxs:'100px', md:'250px'}}></Box>

            </Flex>
          </Box>
        </Box>

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

        <Box>
          <Flex h={{xxs:'50px', md:'117px'}}>
            <Box w='100%' bg='#47A1F8' style={{cursor:'pointer'}} onClick={() => window.open('https://member.ufa-gt.com/register/', "_blank")}>
              <Flex  align={'center'} justify={'center'} h='100%' w='100%'>
                <Title c='white' fz={{ base:'1rem', sm: '2rem'}}>สมัครสมาชิก</Title>
              </Flex>
            </Box>
            <Box w='100%' bg='#C70000' style={{cursor:'pointer'}} onClick={() => window.open('https://member.ufa-gt.com/', "_blank")}>
              <Flex  align={'center'} justify={'center'} h='100%' w='100%'>
                <Title c='white' fz={{ base:'1rem', sm: '2rem'}}>เข้าสู่ระบบ</Title>
              </Flex>
            </Box>

          </Flex>
        </Box>



        <Box pos='relative'>
            <Image src='./images/bg-casino.png' alt='bg' style={{opacity:'0.4', position:'absolute', zIndex: '-2'}} />
          <Container fluid={true}>
            <Box w='100%'>
                <img src={'./images/howto.png'} alt='howto' width='100%' height='100%' />
            </Box>


            <Box w='100%' h='auto'  pos='relative'>
              <Flex w='100%' align='center' justify='center' mb='lg'>
                <img src={'./images/live_football.jpg'} alt='live_football' width='90%' height='100%' />
              </Flex>
              <Flex align='center' justify='center' direction='column' gap={'lg'} h='650px' mb='md'>
                {/* <Title c='white' style={{cursor:'pointer', textDecoration:'underline'}} onClick={() => window.open('https://lfbtv.com/goatfootball/?k=GgjnsePSvN7Y2Jqb', '_blank')} ta='center'> &gt;&gt; ดูบอลสดคลิก !! &lt;&lt; </Title> */}
                <Box h='100%' maw="700px" w='100%'   onClick={() => {window.open('https://lfbtv.com/goatfootball/?k=GgjnsePSvN7Y2Jqb', '_blank') } }>
                  <iframe id="iframe-score108" width="100%" height='100%' style={{maxWidth:'700px', position:'relative', bottom:'0', maxHeight:'650px', pointerEvents:'none', borderRadius:'35px'}} frameBorder="0" scrolling="no" src="https://www.score108.com/soccer/scoreAPI" ref={iframeRef} ></iframe> 
                </Box>
              </Flex>
            </Box>
            <Box w='100%' h='100%'>
                <Flex align='center' justify='center' w='100%' h='100%' direction='column' gap={{md:'lg'}}>
                    <Box w='100%' h='100%'>
                      <img src={'./images/pro1.jpg'} className={isMobile ? 'img-pro-xs' : 'img-pro-md'} alt='pro1' width={'100%'} height={'100%'}/>
                    </Box>
                    <Box w='100%' h='100%'>
                      <img src={'./images/pro2.jpg'} className={isMobile ? 'img-pro-xs' : 'img-pro-md'} alt='pro2' width={'100%'} height={'100%'}/>
                    </Box>
                    <Box w='100%' h='100%'>
                      <img src={'./images/pro3.jpg'} className={isMobile ? 'img-pro-xs' : 'img-pro-md'} alt='pro3' width={'100%'} height={'100%'}/>
                    </Box>
                    <Box w='100%' h='100%'>
                      <img src={'./images/pro4.jpg'} className={isMobile ? 'img-pro-xs' : 'img-pro-md'} alt='pro4' width={'100%'} height={'100%'}/>
                    </Box>
                    <Box w='100%' h='100%'>
                      <img src={'./images/pro5.jpg'} className={isMobile ? 'img-pro-xs' : 'img-pro-md'} alt='pro5' width={'100%'} height={'100%'}/>
                    </Box>
                </Flex>

                <Flex align='center' justify='center' gap={{xxs:'lg', md:'lg'}} direction="column">
                  <Box w='100%' h='100%' pos='relative'>
                    <Flex w='100%' align='center' justify='center'>
                      <Image src={'./images/obj1.png'} alt='obj1' w={{xxs:'100%', md:'50%'}} h={'100%'}/>
                    </Flex>
                  </Box>
                  <Box w='100%' h='100%'>
                    <Flex w='100%' align='center' justify='center'>
                      <Image src={'./images/co.png'} alt='co' w={{xxs:'100%', md:'50%'}} h={'100%'}/>
                    </Flex>
                  </Box>

                  <Box>
                      <Flex align='flex-end' justify='center' direction='row'>
                        <Title fz={{xxs:'1rem', md:'4rem'}}>บทความ UFA</Title>
                        <Title fz={{xxs:'3rem', md:'6rem'}} fs='italic'>GT</Title>
                      </Flex>
                  </Box>
                  </Flex> 
            </Box>
          </Container>
          <Box pos='relative'>
            <Image src={'./images/bg-casino2.png'} alt='bg-casino2'  style={{opacity:'0.4', position:'absolute', zIndex: '-5', bottom:'195px'}}/>
          </Box>
          <Container fluid={true}>
            <Flex align='center' justify='center' gap={{xxs:'lg', md:'lg'}} direction="column">
              {/* <Box w='100%' h='100%' pos='relative'>
                <Flex w='100%' align='center' justify='center'>
                  <Image src={'./images/obj1.png'} alt='obj1' w={{xxs:'100%', md:'50%'}} h={'100%'}/>
                </Flex>
              </Box>
              <Box w='100%' h='100%'>
                <Flex w='100%' align='center' justify='center'>
                  <Image src={'./images/co.png'} alt='co' w={{xxs:'100%', md:'50%'}} h={'100%'}/>
                </Flex>
              </Box>

              <Box>
                  <Flex align='flex-end' justify='center' direction='row'>
                    <Title fz={{xxs:'1rem', md:'4rem'}}>บทความ UFA</Title>
                    <Title fz={{xxs:'3rem', md:'6rem'}} fs='italic'>GT</Title>
                  </Flex>
              </Box> */}
            
              <Box mb='lg'>
                <Flex align='center' justify='center' direction={{xxs:'column', md:'row'}} gap='lg'>
                  <Box mih={{md:'707px'}} maw='383px' style={{background:'linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0) 100%)', borderRadius:'35px'}}>
                    <Box w='100%' p='2rem'>
                      <img src={'./images/b1.png'} alt='b1' width={'100%'} height={'100%'}/>
                      <Text ta='center' fz='1rem'>
                        UFAGT เป็นบริษัทการพนันออนไลน์
                        รายใหญ่ที่สุดของเอเชีย ที่จัดหา
                        ให้ผู้ที่ชื่นชอบเกมออนไลน์ได้พบ
                        กับแบรนด์กีฬา คาสิโน สล็อต
                        และเกมส์ชั้นนำของเอเชีย บริษัท
                        ตั้งอยู่ที่โมนาโค เรามีทีมงานที่
                        เชียวชาญทั่วโลก ที่มุ่งมั่นจะสร้าง
                        เว็บไซต์ เกมออนไลน์แบบครบวงจร โดยใช้เทคโนโลยีที่ทันสมัย

                      </Text>
                    </Box>
                  </Box>

                  <Box mih='707px' maw='383px' style={{background:'linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0) 100%)', borderRadius:'35px'}}>
                    <Box w='100%' p='2rem'>
                      <img src={'./images/b2.png'} alt='b2' width={'100%'} height={'100%'}/>
                      <Text ta='center'>
                        UFAGT เป็นบริษัทการพนันออนไลน์
                        รายใหญ่ที่สุดของเอเชีย ที่จัดหา
                        ให้ผู้ที่ชื่นชอบเกมออนไลน์ได้พบกับ
                        แบรนด์กีฬา คาสิโน สล็อต และ
                        เกมส์ชั้นนำของเอเชีย บริษัทตั้งอยู่
                        ที่โมนาโค เรามีทีมงานที่เชียวชาญ
                        ทั่วโลก ที่มุ่งมั่นจะสร้างเว็บไซต์
                        เกมออนไลน์แบบครบวงจร โดยใช้
                        เทคโนโลยีที่ทันสมัย ทีมงานของเรา
                        ได้ทำการขจัดความซับซ้อนของ
                        คาสิโนแบบดั้งเดิมและช่วยให้สมาชิก
                        เข้าถึงคาสิโนได้อย่างรวดเร็ว ดังนั้นเราจึงมีกระบวนการทำ
                        ธุรกรรมที่มีประสิทธิภาพและช่วย
                        เหลือสมาชิกได้ง่ายขึ้น
                      </Text>
                    </Box>
                  </Box>

                  <Box mih='707px' maw='383px' style={{background:'linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0) 100%)', borderRadius:'35px'}}>
                    <Box w='100%' p='2rem'>
                      <img src={'./images/b3.png'} alt='b3' width={'100%'} height={'100%'}/>
                      <Text ta='center'>
                        UFAGT มีผู้เชี่ยวชาญหลากหลายด้าน
                        ที่มากประสบการณ์ ได้ทำการพัฒนา
                        เว็บไซต์เกมออนไลน์อย่างเหน็ด
                        เหนื่อย เพื่อให้สมาชิกได้สัมผัสกับ
                        นวัตกรรมใหม่ของเกมออนไลน์ที่
                        เสมือนจริงมากที่สุด เราเรียนรู้และ
                        ศึกษา ความต้องการของสมาชิก
                        อยู่ตลอดดเวลาเพื่อที่จะนำมา
                        ปรับปรุง แก้ไขการบริการของเราให้
                        ตรงกับความต้องการของสมาชิก ทีมงาน UFAGT ได้จัดหาคาสิโน
                        ออนไลน์มาให้สมาชิกได้รับ
                        ประสบการณ์จริง ใกล้ชิดกับดีลเลอร์
                        เหมือนกับว่าคุณอยู่ในคาสิโนจริงๆ
                      </Text>
                    </Box>
                  </Box>


                </Flex>
              </Box>

              <Box w='75%' pt='5rem' pb='5rem'>
                <Title ta='center' style={{color:'red'}} fz={{xxs:'1rem', md:'2rem'}}>
                  เราเป็นเว็บไซต์เกมออนไลน์ที่ให้ความสำคัญในด้านความบันเทิงกับสมาชิก และต้องการให้สมาชิกได้สนุกที่ UFAGT อย่างไม่รู้จบ
                  เราตระหนักถึงการให้บริการที่ดีที่สุด UFAGT จึงให้ความสำคัญกับ F.I.R.S.T (ความสำคัญเป็นอันดับแรก)

                </Title>
              </Box>

            </Flex>
            
            {
              !isMobile && (
                <>
                <Box pos='absolute' left='0' bottom={0} style={{zIndex: '-1'}}>
                  <img src="./images/girl1.png" alt='girl1' width='auto' />
                </Box>    
                <Box pos='absolute' right='0' bottom={0} style={{zIndex: '-1'}}>
                  <img src="./images/girl2.png" alt='girl2' width='auto' />
                </Box>
                </>
              )
            }
            
          </Container>

        </Box>
      </Stack>
  )
}


export default App