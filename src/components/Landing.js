'use client'

import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import '@dotlottie/player-component'; // Import the DotLottie player styles
import 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'; // Import the DotLottie player script


function Landing() {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            width="100%"  // Adjusted width for larger screens
            mx='auto'
            my='auto'  // Center the card horizontally
            py='auto'
            px={24}  // Center the card horizontally
            p={10}  // Increased padding for more space inside the card
        >
            <dotlottie-player
                src="https://lottie.host/6aa6b210-d2a5-464a-af6d-9993a32d5c5e/Lj2PNSmYzn.json"
                background="transparent"
                speed="1"
                style={{
                    transform: 'scale(1)' // Apply the scale transform
                }}
                loop
                autoplay
            ></dotlottie-player>

            <Stack ml={{ base: 0, sm: 4 }} my={10}>
                <CardBody px={15} pr={20}>
                    <Heading size='lg'>Your Learning, Your Way: Personalized Education Simplified</Heading>

                    <Text py='2'>
                        Welcome to a realm where learning is an adventure tailored exclusively for you. In the vast ocean of online courses,
                        we're your compass, guiding you to the perfect destination for your unique educational journey. No more settling for what's popular –
                        embark on a personalized learning odyssey where every course resonates with your passions and aspirations.
                    </Text>
                    <Button my={5} variant='solid' colorScheme='blue'>
                        Start Exploring
                    </Button>
                </CardBody>




            </Stack>

        </Card>

    )
}

export default Landing;