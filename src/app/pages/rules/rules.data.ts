import { RuleSection } from "src/app/models/rule-section.model";

export const RULES_SECTIONS: RuleSection[] = [
  {
    title: 'rules.dealTitle',
    paragraphs: ['rules.deal']
  },
  {
    title: 'rules.goalTitle',
    paragraphs: [
      'rules.goal',
      'rules.rolesDealer',
      'rules.rolesLeft',
      'rules.rolesRight',
      'rules.postDeal'
    ],
    highlight: ['rules.rolesDealer', 'rules.rolesLeft', 'rules.rolesRight']
  },
  {
    title: 'rules.declareTitle',
    paragraphs: ['rules.declare1', 'rules.declare2', 'rules.declare3']
  },
  {
    title: 'rules.swapTitle',
    paragraphs: [
      'rules.swap1',
      'rules.swap2',
      'rules.swap3',
      'rules.swap4',
      'rules.swap5'
    ]
  },
  {
    title: 'rules.kittyTitle',
    paragraphs: ['rules.kitty']
  },
  {
    title: 'rules.playTitle',
    paragraphs: [
      'rules.play1',
      'rules.play2',
      'rules.play3',
      'rules.play4',
      'rules.play5',
      'rules.play6',
      'rules.play7',
      'rules.play8'
    ]
  },
  {
    title: 'rules.scoringTitle',
    paragraphs: [
      'rules.scoring1',
      'rules.scoring2',
      'rules.scoring3',
      'rules.scoring4'
    ]
  },
  {
    title: 'rules.endTitle',
    paragraphs: [
      'rules.end1',
      'rules.end2',
      'rules.end3',
      'rules.end4'
    ]
  }
];
