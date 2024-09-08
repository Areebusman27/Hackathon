document.addEventListener('DOMContentLoaded', function () {
    const toggleSkillsButton = document.getElementById('toggleSkillsButton');
    const skillsSection = document.getElementById('skills');
  
    toggleSkillsButton.addEventListener('click', function () {
      if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
      } else {
        skillsSection.style.display = 'none';
      }
    });
  });
  