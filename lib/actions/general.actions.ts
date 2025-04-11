import {generateObject} from "ai";
import {google} from "@ai-sdk/google";
import {z} from "zod";

export const generateMedicalDiagnosis = async (symptoms: string, age: number, gender: string) =>{

    const formattedSymptoms = symptoms.replace(/\n/g, ' ').trim();

    const prompt = `
    You are a medical diagnostic AI analyzing a patient's reported symptoms. Your task is to assess the information provided and suggest potential diagnoses based on current medical knowledge. Be detailed, cautious, and evidence-based in your evaluation. Factor in the patient's age and gender, as these can significantly influence diagnosis. Consider differential diagnoses and avoid jumping to conclusions. If any symptoms are vague or missing, highlight what additional information is needed for a more accurate assessment.

    Patient Information:
    - **Age**: ${age}
    - **Gender**: ${gender}
    - **Reported Symptoms**:
    ${formattedSymptoms}

    Please analyze the case and provide the following:
    - **Primary Suspected Condition**: The most likely diagnosis, with reasoning.
    - **Alternative Possibilities**: At least two differential diagnoses and why they are considered.
    - **Recommended Next Steps**: Tests, clinical evaluations, or referrals needed.
    - **Urgency Level**: Categorize as Non-Urgent, Routine, Semi-Urgent, or Emergency, with justification.
    - **Missing Information**: Questions or data needed to improve diagnostic accuracy.
    `
    const system_message = `
    You are an experienced diagnostic assistant trained on clinical best practices and current medical knowledge. Your role is to interpret patient-reported symptoms in context, considering the patient's age and gender, and provide a medically sound preliminary assessment. Use structured clinical reasoning to identify potential conditions. Always consider multiple possibilities and recommend appropriate next steps.

    Your response should include:
    - A reasoned explanation for the **most likely condition**, based on symptoms, age, and gender.( needs to be a string)
    - At least two **differential diagnoses** with justification.( needs to be an array of strings)
    - **Recommended diagnostic actions** such as lab tests, imaging, or specialist referrals.( needs to be an array of strings)
    - A clearly stated **urgency level** to guide next steps.( needs to be a string)
    - Identification of **missing or unclear information** that would help improve diagnostic accuracy.( needs to be a string)

    You are not making a definitive diagnosis but offering a reasoned, supportive analysis for use by qualified healthcare providers. Maintain a tone that is professional, informative, and sensitive to the context of health-related communication.
    Ensure you follow the schema perfectly.
    `
    const response = await generateObject({
        model: google("gemini-2.0-flash-001", {structuredOutputs: false}),
        schema: z.object({
            primaryDiagnosis: z.string().describe("The most likely diagnosis, with reasoning."),
            alternativePossibilities: z.array(z.string()).describe("At least two differential diagnoses and why they are considered."),
            recommendedNextSteps: z.array(z.string()).describe("Tests, clinical evaluations, or referrals needed."),
            urgencyLevel: z.enum(["Non-Urgent", "Routine", "Semi-Urgent", "Emergency"]).describe("Categorize as Non-Urgent, Routine, Semi-Urgent, or Emergency, with justification."),
            
        }),
        prompt: prompt,
        system: system_message, 
    })

    return response.object;
}