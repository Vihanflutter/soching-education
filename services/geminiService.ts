import { GoogleGenAI, Type, Schema } from "@google/genai";
import { StudyPlanResponse, GradeLevel, Subject } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const studyPlanSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    studentLevel: { type: Type.STRING },
    subject: { type: Type.STRING },
    projectedImprovement: { 
        type: Type.NUMBER, 
        description: "A number between 15 and 40 representing percentage improvement in 4 weeks" 
    },
    roadmap: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          weekNumber: { type: Type.INTEGER },
          focusArea: { type: Type.STRING },
          topics: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          hoursEstimated: { type: Type.NUMBER }
        },
        required: ["weekNumber", "focusArea", "topics", "hoursEstimated"]
      }
    }
  },
  required: ["studentLevel", "subject", "roadmap", "projectedImprovement"]
};

export const generateStudyPlan = async (
  grade: GradeLevel,
  subject: Subject,
  goals: string
): Promise<StudyPlanResponse> => {
  try {
    const prompt = `
      Create a specialized 4-week NEET exam preparation schedule for a student in ${grade} focusing on ${subject}.
      Their specific weak area or goal is: "${goals}".
      The plan should be rigorous, focusing on NCERT mastery, Previous Year Questions (PYQs), and conceptual clarity as taught by top faculties like Dr. Anshuman Agarwal.
      Assume 6-8 hours of study per week for this subject.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: studyPlanSchema,
        systemInstruction: "You are a senior academic counselor at Soching Education, specializing in NEET Medical Entrance Exams. You provide highly structured, realistic biology-focused study plans.",
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as StudyPlanResponse;
  } catch (error) {
    console.error("Error generating study plan:", error);
    // Fallback data
    return {
      studentLevel: grade,
      subject: subject,
      projectedImprovement: 25,
      roadmap: [
        { weekNumber: 1, focusArea: "NCERT Deep Dive", topics: ["Chapter Reading", "Diagram Practice"], hoursEstimated: 6 },
        { weekNumber: 2, focusArea: "Conceptual Clarity", topics: ["Video Lectures", "Doubt Clearing"], hoursEstimated: 7 },
        { weekNumber: 3, focusArea: "Application & PYQs", topics: ["Past 10 Years Questions", "Assertion-Reasoning"], hoursEstimated: 8 },
        { weekNumber: 4, focusArea: "Mock Testing", topics: ["Full Length Test", "Error Analysis"], hoursEstimated: 6 }
      ]
    };
  }
};