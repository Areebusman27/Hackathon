document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resumeForm');
    const resumeContainer = document.getElementById('resumeContainer');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const education = document.getElementById('education').value;
      const experience = document.getElementById('experience').value;
      const skills = document.getElementById('skills').value.split(',');
  
      // Generate editable resume HTML
      resumeContainer.innerHTML = `
        <section contenteditable="true">
          <h2>${name}</h2>
          <p>Email: ${email}</p>
        </section>
        <section contenteditable="true">
          <h2>Education</h2>
          <p>${education}</p>
        </section>
        <section contenteditable="true">
          <h2>Work Experience</h2>
          <p>${experience}</p>
        </section>
        <section contenteditable="true">
          <h2>Skills</h2>
          <ul>
            ${skills.map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('')}
          </ul>
        </section>
      `;
  
      // Show the resume container
      resumeContainer.style.display = 'block';
  
      // Set up listeners to reflect real-time changes (optional)
      const editableSections = resumeContainer.querySelectorAll('[contenteditable="true"]');
      editableSections.forEach(section => {
        section.addEventListener('input', () => {
          // Reflect the changes in real-time
          console.log('Content updated:', section.innerHTML);
        });
      });
    });
  });
  