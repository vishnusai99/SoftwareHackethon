'use client'

import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";

function Landing() {
    return (
        <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    width={{ base: '100%', md: '85%', xl: '80%' }}  // Adjusted width for larger screens
    mx='auto'  // Center the card horizontally
    p={6}  // Increased padding for more space inside the card
>
    <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '400px', md: '500px' }}  // Adjusted maximum width for larger images
        src='https://img.freepik.com/free-vector/online-certification-with-graduate-laptop_23-2148571246.jpg?w=826&t=st=1702564550~exp=1702565150~hmac=57e9420dc3baf25b6c47c8ac23e75fa7077d6459400e36c8815e6e581923684c'
        alt='Caffe Latte'
    />

    <Stack ml={{ base: 0, sm: 4 }}>
        <CardBody>
            <Heading size='lg'>Your Learning, Your Way: Personalized Education Simplified</Heading>

            <Text py='2'>
                Welcome to a realm where learning is an adventure tailored exclusively for you. In the vast ocean of online courses,
                we're your compass, guiding you to the perfect destination for your unique educational journey. No more settling for what's popular –
                embark on a personalized learning odyssey where every course resonates with your passions and aspirations.
            </Text>
        </CardBody>

        <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                Start Exploring
            </Button>
        </CardFooter>
    </Stack>
</Card>

    )
}

export default Landing;