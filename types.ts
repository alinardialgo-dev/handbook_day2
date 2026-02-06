
export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  points: {
    label: string;
    description?: string;
    icon?: string;
  }[];
  category: 'intro' | 'problem' | 'solution' | 'coding' | 'math' | 'closing';
}

export interface PitchScenario {
  concern: string;
  suggestedResponse: string;
}
