'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { isOpen, onToggle } = useDisclosure()
  const navigate = useNavigate()
  console.log(localStorage.getItem('userId', 'ueeeee'))
  return (
    <Box className='bg=[#589F3C]'>
      <Flex className='py-0.5'
        bg={useColorModeValue('#589F3C')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'63px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <div className='flex items-center w-[58%]' onClick={() => {
            navigate('/')
          }}>
            
            {/* {logo here} */}

            <h1 className='text-3xl text-white font-semibold ml-3'>
              Course Recommendor 
            </h1>
          </div>

          <div className='flex items-center mx-5 ml-8'>
            <Button color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} href={'/link1'}>
              Link 1
            </Button>
          </div>

          <div className='flex items-center mx-5 ml-2'>
            <Button color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} href={'/link2'}>
              Link 2
            </Button>
          </div>

          <div className='flex items-center mx-5 ml-2'>
            <Button color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} href={'/link3'}>
              Link 3
            </Button>
          </div>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {!localStorage.getItem('userId') || localStorage.getItem('userId') === 'undefined' &&
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} href={'/signup'}>
              SignUp
            </Button>
            <Button className='mr-4' color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} href={'/login'}>
              Login
            </Button>
          </Stack>
        }
        {localStorage.getItem('userId') && localStorage.getItem('userId') !== 'undefined' &&
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            className='mr-3'
            spacing={6}>
            <Button color={'white'} as={'a'} fontSize={'xl'} fontWeight={500} variant={'link'} onClick={() => {
              localStorage.setItem('userId', 'undefined');
              localStorage.clear();
              navigate('/login')
            }}>
              Log Out
            </Button>
          </Stack>
        }

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )

}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
        className='text-white'
      >
        <Text fontWeight={600} color={'white'}>
          {label}
        </Text>
        {children && (
          <Icon color={'white'}
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const NAV_ITEMS = [

]