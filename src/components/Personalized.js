import { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Heading,
    CircularProgress,
    CircularProgressLabel,
    Flex,
    Spacer,
    Spinner,
    HStack,
    Tag,
    Textarea,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import { Input } from '@material-tailwind/react';

function Personalized() {
    const navigate = useNavigate();
    const [selectedTag, setSelectedTag] = useState('');

    const [questions, setQuestions] = useState([
        "What is your preferred skill level for courses?", // Level
        "Select your preferred course duration", // duration
        "Which categories interest you the most?", // interests
    ]);
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTag('')
        } else {
            setSelectedTag(tag);
        }
    };

    const options = [
        ["Beginner", "Intermediate", "Advanced"],
        [
            "Short and focused (4-10 hours)",
            "Moderate (10-20 hours)",
            "Extended (20+ hours)",
        ],
        [
            "Programming",
            "Film",
            "Marketing",
            "Cloud Computing",
            "Cryptography",
            "Cyber Security",
            "Data Structures",
            "Machine Learning",
            "Deep Learning",
            "Internet of Things",
            "Excel",
        ],
    ];
    const answers = [
        ["Beginner", "Intermediate", "Advanced"],
        [
            "Short and focused (1-2 weeks)",
            "Moderate (4-6 weeks)",
            "Extended (8+ weeks)",
        ],
        [
            "Programming",
            "film",
            "Marketing",
            "Cloud Computing cloud-computing",
            "Cryptography",
            "cyber-securty cyber security",
            "Data Structures",
            "Machine Learning machine-learning",
            "Deep Learning",
            "internet of things",
            "excel",
        ],
    ];

    let [userInput, setUserInput] = useState('')

    let handleInputChange = (e) => {
        let inputValue = e.target.value
        setUserInput(inputValue)
    }


    return (
        <Flex
            justify={"center"}
            direction={"column"}
            align={"center"}
            my={"60px"}
            mx={"80px"}
        >
            <Flex mb={"25px"} justify={"space-between"} align={"start"}>
                <Box fontSize={"30px"} fontWeight={"bold"} mb={"2px"}>
                    <Heading fontSize={"35px"}>Select a topic for personalized course recommendation?</Heading>
                </Box>
            </Flex>
            <div className="flex flex-row items-center flex-wrap mx-3">
                {options[2].map((tag, index) => (
                    <span
                        className="rounded-full p-1 px-2"
                        key={tag}
                        onClick={() => handleTagClick(options[2][index])}
                        style={{
                            padding: "12px",
                            margin: "5px",
                            cursor: "pointer",
                            backgroundColor: selectedTag === tag
                                ? "#3498db"
                                : "#ecf0f1",
                            color: selectedTag === tag
                                ? "#ffffff"
                                : "#2c3e50",
                            borderRadius: "4px",
                            display: "inline-block",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
            {
                selectedTag !== '' && <div className='m-3 p-3 w-[60%]'>
                    <Textarea
                        value={userInput}
                        onChange={handleInputChange}
                        placeholder='Describe your expectation on the course outcomes...'
                        size='lg'
                    />
                </div>
            }
            <Button
                className="my-3 flex flex-row self-end"
                variant={"solid"}
                colorScheme="blue"
                onClick={() => {
                    navigate("/home1", {
                        state: { selectedTag: selectedTag, userInput: userInput },
                    });
                }}
            >
                Next
            </Button>
        </Flex>
    );
}

export default Personalized;
