import React, { useState } from 'react'
import {
    Box,
    Button,
    Heading,
    CircularProgress,
    CircularProgressLabel,
    Flex,
    Spacer,
    Spinner,
} from '@chakra-ui/react'
import { BiRadioCircleMarked } from "react-icons/bi";
import { useElapsedTime } from 'use-elapsed-time'
import { useNavigate } from 'react-router-dom';
const Quiz = () => {
    const navigate = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [questions, setQuestions] = useState([
        'What is your primary goal for learning on this platform?',
        'Which learning style suits you best?',
        'What is your preferred skill level for courses?',
        'Select your preferred course duration',
        'Which categories interest you the most?',
    ]);

    const options = [
        [
            'Skill enhancement for current job',
            'Career change',
            'Personal enrichment and hobbies'
        ],
        [
            'Visual (videos, infographics)',
            'Auditory (lectures, podcasts)',
            'Mix Of Both'
        ],
        [
            'Beginner',
            'Intermediate',
            'Advanced'
        ],
        [
            'Short and focused (1-2 weeks)',
            'Moderate (4-6 weeks)',
            'Extended (8+ weeks)'
        ],
        [
            'Programming',
            'Web Development',
            'Data Science',
            'Design',
            'Marketing',
        ],
    ];

    const values = [
        [1, 2, 5, 3],
        [1, 5, 2, 3],
        [1, 2, 5, 1],
        [2, 1, 5, 3],
        [1, 2, 5, 2]
    ]
    const [loading, setLoading] = useState(false)
    const [key, setKey] = useState("0");

    const CountDownTimerComponent = ({ nextQuestion }) => {
        const duration = 10;
        const { elapsedTime } = useElapsedTime({
            duration,
            isPlaying: true,
            updateInterval: 1,
            onUpdate: (time) => time === duration && nextQuestion(),
        });

        const remainingTime = Math.ceil(duration - elapsedTime);

        return (
            <CircularProgress size={'43px'} value={elapsedTime * 10}>
                <CircularProgressLabel>{remainingTime}</CircularProgressLabel>
            </CircularProgress>
        );
    };

    const nextQuestion = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
            } else {
                setShowScore(true)
                localStorage.setItem('score', score);
                navigate('/profile');
            }
            setKey(new Date().getTime())
        }, 1000)
    }

    return (
        <Flex justify={'center'} direction={'column'} align={'center'} my={'60px'} mx={'80px'}>
            {!showScore &&
                <Box>
                    <Flex mb={'25px'} justify={'space-between'} align={'start'}>
                        <Box fontSize={'30px'} fontWeight={'bold'} mb={'2px'}>
                            {/* <Box color={'indigo'}>QUESTION {currentQuestion + 1}/{questions.length}</Box> */}
                            <Heading fontSize={'35px'}>{questions[currentQuestion]}</Heading>
                        </Box>
                        {/* <CountDownTimerComponent key={key} nextQuestion={nextQuestion} /> */}
                    </Flex>
                    <Flex direction={'column'} justify={'center'} gap={'20px'}>
                        {options[currentQuestion].map((option, index) => {
                            return (
                                <Flex
                                    align={'center'}
                                    justify={'space-between'}
                                    p={'10px'}
                                    pl={'10px'}
                                    borderRadius={'5px'}
                                    bg={'gray.100'}
                                    width={'550px'}
                                    fontSize={'20px'}
                                    fontWeight={'medium'}
                                    key={index}
                                    _hover={{
                                        cursor: 'pointer',
                                        bg: 'gray.200',
                                    }}
                                    onClick={() => {
                                        setLoading(true)
                                        setTimeout(() => {
                                            setScore(score + values[currentQuestion][index])
                                            setLoading(false)
                                            if (currentQuestion < questions.length - 1) {
                                                setCurrentQuestion(currentQuestion + 1)
                                            } else {
                                                setShowScore(true)
                                                localStorage.setItem('score', score);
                                                navigate('/profile');
                                            }
                                            setKey(new Date().getTime())
                                        }, 1000)
                                    }}
                                >
                                    {option}
                                    <Box>
                                        {loading ? <Spinner size={'xs'} color={'gray.700'} /> : <BiRadioCircleMarked size={'15px'} color={'gray.700'} />}
                                    </Box>
                                </Flex>
                            )
                        })}
                    </Flex>
                </Box>}
        </Flex>
    )
}

export default Quiz