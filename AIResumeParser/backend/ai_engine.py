from google.genai import Client
import os
from dotenv import load_dotenv

# Load API key from .env
load_dotenv()

# Initialize the new Client
client = Client(api_key=os.getenv("GEMINI_API_KEY"))

def get_resume_score(resume_text, job_description):
    # Modern Prompt
    prompt = f"""
    Analyze this resume against the job description.
    Resume: {resume_text}
    JD: {job_description}
    
    Output format:
    Score: [0-100]
    Reason: [Short explanation]
    """
    
    # Using the updated generate function
    response = client.models.generate_content(
        model="gemini-2.5-flash", 
        contents=prompt
    )
    
    return response.text

# Testing
if __name__ == "__main__":
    test_resume = "Python developer with 2 years experience."
    test_jd = "Hiring Python developers."
    print(get_resume_score(test_resume, test_jd))