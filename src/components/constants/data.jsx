import stress from "../../assets/stress-test.png";
import anxious from "../../assets/anxious-test.png";
import sleep from "../../assets/sleep-test.png";
import sad from "../../assets/sad-test.png";
import workplace from "../../assets/workplace-test.png";
import happiness from "../../assets/happy-test.png";

export const categories = [
  { id: 1, type: "Depression" },
  { id: 2, type: "PTSD" },
  { id: 3, type: "Molestation" },
  { id: 4, type: "Anxiety" },
  { id: 5, type: "Stories" },
];

export const Tests = [
  {
    heading: "Am i stressed",
    description:
      "Explore how stress has been taking a toll on your well-being. Take the assessment today!",
    img: stress,
    link: "/taketest/stress",
  },
  {
    heading: "Am I Sad Or Depressed?",
    description:
      "Is it more than just feeling low? Take the assessment to find out.",
    img: sad,
    link: "/taketest/sad",
  },
  {
    heading: "How am I sleeping ?",
    description:
      "Are you getting the quality sleep you deserve? Know today by taking the assessment.",
    img: sleep,
    link: "/taketest/sleep",
  },
  {
    heading: "Am I Anxious?",
    description:
      "Anxiety jitters never leave you. Take the self-check today to understand your anxiety better.",
    img: anxious,
    link: "/taketest/anxious",
  },
  {
    heading: "Happiness Scale",
    description: "Are you happy? Know today by taking the assessment.",
    img: happiness,
    link: "/taketest/happiness",
  },
  {
    heading: "Workplace Stress Test",
    description:
      "Are you getting sick-listed due to work-related stress? Know today by taking the assessment",
    img: workplace,
    link: "/taketest/workplace",
  },
];
