import { Topic, type QuestionBank } from "./utils/types";

const questionBank: QuestionBank = [
  {
    id: 1,
    topic: Topic.SALES,
    questions: [
      {
        type: "scale",
        question:
          "On a scale of 1 to 5, how well do you handle customer inquiries?",
      },
      {
        type: "checklist",
        prompt: "Select all that apply. When invoicing, I include:",
        checklist: [
          { weighting: 6, content: "Account number + sort code" },
          { weighting: 4, content: "Service description" },
          { weighting: 4, content: "Timeframe for payment" },
          { weighting: 4, content: "Invoice Number" },
          { weighting: 2, content: "Use an invoicing tool" },
        ],
      },
    ],
  },
  {
    id: 2,
    topic: Topic.SALES,
    questions: [
      {
        type: "scale",
        question:
          "How confident do you feel pitching your services/products to a client?",
      },
      {
        type: "checklist",
        prompt: "Select all that apply. When invoicing, I include:",
        checklist: [
          {
            weighting: 6,
            content: "I have delivered an elevator pitch for myself",
          },
          {
            weighting: 3,
            content: "I have a deck ready in preparation to use",
          },
          { weighting: 5, content: "I have an up-to-date CV/portfolio" },
          {
            weighting: 4,
            content: "I tailor my pitch according to the specific client",
          },
          {
            weighting: 2,
            content: "I can pitch my key products/services on demand",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    topic: Topic.MARKETING,
    questions: [
      {
        type: "scale",
        question:
          "I feel confident selling myself as a personal/professional brand",
      },
      {
        type: "checklist",
        prompt: "I feel confident selling myself as a personal brand ....",
        checklist: [
          {
            weighting: 9,
            content: "Social Media Presence",
          },
          {
            weighting: 3,
            content: "Storytelling",
          },
          { weighting: 5, content: "Phyiscal Marketing Materials e.g QR code" },
          {
            weighting: 1,
            content: "Name that you freelance under",
          },
          {
            weighting: 2,
            content: "Logo",
          },
        ],
      },
    ],
  },
];

export default questionBank;
