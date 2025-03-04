

document.getElementById('resumeForm')?.addEventListener('submit',function(event){
  event.preventDefault();

  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
  const nameElement = document.getElementById('name') as HTMLInputElement
  const emailElement = document.getElementById('email') as HTMLInputElement
  const  phoneElement = document.getElementById('phone') as HTMLInputElement
  const  educationElement = document.getElementById('education') as HTMLInputElement
  const  experienceElement = document.getElementById('experience') as HTMLInputElement
  const  skillsElement = document.getElementById('skills') as HTMLInputElement



   if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){


 
   const name = nameElement.value
   const email = emailElement.value
   const phone = phoneElement.value
   const education = educationElement.value
   const experience = experienceElement.value
   const skills = skillsElement.value


   

const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): ""






  const resumeOutput = `
  <h2>Your Resume CV!</h2>
  ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
  <p><strong>Name:</strong><span id="edit-name" class="editable">${name}</span></p>
  <p><strong>Email:</strong><span id="edit-email" class="editable">${email}</span></p>
  <p><strong>Phone:</strong><span id="edit-phone" class="editable">${phone}</span></p>

  <h3>Education</h3>
  <p id="edit-education" class="editable">${education}</p>
  <h3>Experience</h3>
  <p id="edit-experience" class="editable">${experience}</p>
  <h3>Skills</h3>
  <p id="edit-skills" class="editable">${skills}</p>
`;



 const resumeOutputElement = document.getElementById('resumeOutput')
  if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
  }else{
    console.error('The Resume output elements are Missing')
  }
   }else{
    console.error('One or more output Elements are missing');
    
   }
})