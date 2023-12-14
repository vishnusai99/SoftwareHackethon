import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { BiRadioCircleMarked } from "react-icons/bi";
import { useElapsedTime } from "use-elapsed-time";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [goal, setGoal] = useState("");
  const [learingStyle, setLearingStyle] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState([]);
  const [interests, setInterests] = useState([]);

  const [questions, setQuestions] = useState([
    "What is your preferred skill level for courses?", // Level
    "Select your preferred course duration", // duration
    "Which categories interest you the most?", // interests
  ]);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
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

  const [loading, setLoading] = useState(false);
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
      <CircularProgress size={"43px"} value={elapsedTime * 10}>
        <CircularProgressLabel>{remainingTime}</CircularProgressLabel>
      </CircularProgress>
    );
  };

  const nextQuestion = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
        navigate("/quiz");
      }
      setKey(new Date().getTime());
    }, 1000);
  };

  return (
    <Flex
      justify={"center"}
      direction={"column"}
      align={"center"}
      my={"60px"}
      mx={"80px"}
    >
      {!showScore && (
        <Box>
          <Flex mb={"25px"} justify={"space-between"} align={"start"}>
            <Box fontSize={"30px"} fontWeight={"bold"} mb={"2px"}>
              {/* <Box color={'indigo'}>QUESTION {currentQuestion + 1}/{questions.length}</Box> */}
              <Heading fontSize={"35px"}>{questions[currentQuestion]}</Heading>
            </Box>
            {/* <CountDownTimerComponent key={key} nextQuestion={nextQuestion} /> */}
          </Flex>
          <Flex direction={"column"} justify={"center"} gap={"20px"}>
            {options[currentQuestion].map((option, index) => {
              return (
                <Flex
                  align={"center"}
                  justify={"space-between"}
                  p={"10px"}
                  pl={"10px"}
                  borderRadius={"5px"}
                  bg={"gray.100"}
                  width={"550px"}
                  fontSize={"20px"}
                  fontWeight={"medium"}
                  key={index}
                  _hover={{
                    cursor: "pointer",
                    bg: "gray.200",
                  }}
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                      if (currentQuestion === 0) {
                        console.log(options[currentQuestion][index]);
                        setGoal(options[currentQuestion][index]);
                      } else if (currentQuestion === 1) {
                        setDuration(options[currentQuestion][index]);
                      }

                      if (currentQuestion < questions.length - 2) {
                        setCurrentQuestion(currentQuestion + 1);
                      } else {
                        setShowScore(true);
                      }
                      setKey(new Date().getTime());
                    }, 1000);
                  }}
                >
                  {option}
                  <Box>
                    {loading ? (
                      <Spinner size={"xs"} color={"gray.700"} />
                    ) : (
                      <BiRadioCircleMarked size={"15px"} color={"gray.700"} />
                    )}
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      )}

      {showScore && (
        <div>
          <Flex mb={"25px"} justify={"space-between"} align={"start"}>
            <Box fontSize={"30px"} fontWeight={"bold"} mb={"2px"}>
              <Heading fontSize={"35px"}>What topics are you interested in?</Heading>
            </Box>
          </Flex>
          <div className="flex flex-row items-center flex-wrap mx-3">
            {options[2].map((tag, index) => (
              <span
                className="rounded-full p-1 px-2"
                key={tag}
                onClick={() => handleTagClick(answers[2][index])}
                style={{
                  padding: "12px",
                  margin: "5px",
                  cursor: "pointer",
                  backgroundColor: selectedTags.includes(answers[2][index])
                    ? "#3498db"
                    : "#ecf0f1",
                  color: selectedTags.includes(answers[2][index])
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
          <Button
            className="my-3 flex flex-row self-end"
            variant={"solid"}
            colorScheme="blue"
            onClick={() => {
              navigate("/home", {
                state: { keywords: selectedTags, skillLevel: goal, duration },
              });
            }}
          >
            Next
          </Button>
        </div>
      )}
    </Flex>
  );
};

export default Quiz;
