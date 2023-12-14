import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function Courses({ courseData }) {
    console.log(courseData, 'dd')
    return (
        <div>
            <Card maxW='sm' className='shadow-md'>
                {/* <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt=''
                    borderTopRadius='md'
                /> */}
                <CardBody className='w-full'>
                    <Stack mt='6' spacing='4'>
                        <Heading noOfLines={2} size='md'>{courseData['Course Name']}</Heading>
                        <Text noOfLines={3}>
                            {courseData['Course Description']}
                        </Text>
                        <div className='flex flex-row items-center mr-2'>
                            <Text color='green.600' fontSize='lg' className='flex-1'>
                                {courseData['Difficulty Level']}
                            </Text>
                            <div className='flex flex-row items-center gap-x-3'>
                                <svg aria-hidden="true" height="18" fill='gold' viewBox="0 0 16 16" version="1.1" width="18" data-view-component="true" class="octicon octicon-star-fill starred-button-icon d-inline-block mr-2">
                                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                                </svg>

                                <Text color='blue.600' fontSize='xl'>
                                    {courseData['Course Rating']}
                                </Text>
                            </div>
                        </div>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='items-center'>
                    <ButtonGroup spacing='2' onClick={() => {
                        window.location.href = courseData['Course URL']
                    }}>
                        <Button variant='solid' colorScheme='blue'>
                            Learn Now
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Courses;
