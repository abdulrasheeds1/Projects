import PyPDF2

def extract_text_from_pdf(pdf_file_path):
    # Open the PDF file in Read Binary mode
    with open (pdf_file_path, 'rb') as file:
        # Create a PDF reader object
        pdf_reader = PyPDF2.PdfReader(file)
        
        extracted_text = ""
        
        # Loop through all the pages and extract text
        for page_num in range(len(pdf_reader.pages)):
            page = pdf_reader.pages[page_num]
            extracted_text += page.extract_text()
            
    return extracted_text

# --- Execution ---
# Replace 'my_resume.pdf' with your actual file name
filename = 'sampleResume\Personal-trainer-resume-example-3.pdf'
resume_content = extract_text_from_pdf(filename)

print("--- Successfully Extracted Text ---")
print(resume_content)
