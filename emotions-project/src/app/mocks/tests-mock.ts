import { IQuestion } from "../models/question"
import { AttemptRes, QuestionnareRes } from "../models/questionnare-res"

export const questionsMock = [
  {
    "id": 1,
    "text": "Do you like to get a present?",
    "emotion": {
      "id": 1,
      "description": "joy"
    }
  },
  {
    "id": 2,
    "text": "Your friend let you spend his money, do you feel surprised?",
    "emotion": {
      "id": 2,
      "description": "surprise"
    }
  },
  {
    "id": 3,
    "text": "Your irritation level when someone borrows your stuff",
    "emotion": {
      "id": 3,
      "description": "anger"
    }
  },
  {
    "id": 4,
    "text": "Your brother ate a cake was laying on the floor, your disgust level",
    "emotion": {
      "id": 4,
      "description": "disgust"
    }
  },
  {
    "id": 5,
    "text": "A wolf is approaching you, your fear level",
    "emotion": {
      "id": 5,
      "description": "fear"
    }
  },
  {
    "id": 6,
    "text": "Your grandmother`s cat died, do you feel sad?",
    "emotion": {
      "id": 6,
      "description": "sadness"
    }
  }
]

export const questionsResMock:QuestionnareRes ={
  questions: questionsMock,
}

export const attemptResMock:AttemptRes = {
  attemptId : 5
}

export const testResMock = [
  {
    emotionId: 5,
    value: 3
  },
  {
    emotionId: 2,
    value: 0
  },
  {
    emotionId: 4,
    value: 2
  }
]