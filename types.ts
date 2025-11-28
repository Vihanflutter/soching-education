export interface StudyWeek {
  weekNumber: number;
  focusArea: string;
  topics: string[];
  hoursEstimated: number;
}

export interface StudyPlanResponse {
  studentLevel: string;
  subject: string;
  roadmap: StudyWeek[];
  projectedImprovement: number; // Percentage
}

export interface Teacher {
  id: number;
  name: string;
  subject: string;
  rating: number;
  experience: string;
  imageUrl: string;
  credentials: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  college: string; // Changed from grade/exam to college for MBBS students
  text: string;
  imageUrl: string;
  year: string;
}

export enum GradeLevel {
  Class11 = "Class 11 (NEET 2026)",
  Class12 = "Class 12 (NEET 2025)",
  Dropper = "Dropper / Repeater",
  Foundation = "Class 9-10 Foundation",
}

export enum Subject {
  Biology = "Biology (Zoology & Botany)",
  Physics = "Physics",
  Chemistry = "Chemistry",
}