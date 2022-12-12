import { ResultItem } from "../models/emotions";

export const resultMock: ResultItem[] = [
  {
    category: 'Joy',
    subCategories: [
      {
        emotions: ['Amused', 'Delighted', 'Excited'],
        score: 0.3
      },
      {
        emotions: ['Enthralled', 'Rapturous', 'Elated'],
        score: 0.5
      },
      {
        emotions: ['Satisfied', 'Proud'],
        score: 0.5
      },
    ]
  },
  {
    category: 'Sadness',
    subCategories: [
      {
        emotions: ['Lonely', 'Disappointed'],
        score: 0.8
      },
      {
        emotions: ['Excluded', 'Displeased', 'Dismayed'],
        score: 0.7
      },
      {
        emotions: ['Gried', 'Anguish'],
        score: 0.2
      },
      {
        emotions: ['Despair'],
        score: 0.5
      },
    ]
  },
  {
    category: 'Fear',
    subCategories: [
      {
        emotions: ['Mortified', 'Embarrassed'],
        score: 0.1
      },
      {
        emotions: ['Scared'],
        score: 0.8
      },
      {
        emotions: ['Frightened'],
        score: 0.3
      },
      {
        emotions: ['Terrified', 'Horrified'],
        score: 0.7
      },
    ]
  },
  {
    category: 'Afraid',
    subCategories: [
      {
        emotions: ['Contempt', 'Hatred', 'Revolted'],
        score: 0.3
      },
      {
        emotions: ['Repulsed', 'Guilty', 'Regretful'],
        score: 0.5
      },
      {
        emotions: ['Ashamed', 'Disapproving', 'Appalled'],
        score: 0.5
      },
    ]
  },
  {
    category: 'Surprise',
    subCategories: [
      {
        emotions: ['Shocked', 'Stunned', 'Startled'],
        score: 0.3
      },
      {
        emotions: ['Amazed', 'Awestruck', 'Astouned'],
        score: 0.5
      },
      {
        emotions: ['Confused', 'Perplexed'],
        score: 0.5
      },
    ]
  },
  {
    category: 'Anger',
    subCategories: [
      {
        emotions: ['Enraged', 'Mad', 'Furious'],
        score: 0.2
      },
      {
        emotions: ['Resentful', 'Jealous', 'Envious'],
        score: 0.4
      },
      {
        emotions: ['Humiliated', 'Exasperated'],
        score: 0.6
      },
    ]
  },
]
