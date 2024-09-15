document.addEventListener('DOMContentLoaded', function () {
    var addSkillButton = document.getElementById('add-skill');
    var skillsContainer = document.getElementById('skills-container');
    var skillCount = 1;
    addSkillButton.addEventListener('click', function () {
        var newDiv = document.createElement('div');
        newDiv.classList.add('skills-form');
        newDiv.setAttribute('id', "skill-".concat(skillCount));
        var newLabel = document.createElement('label');
        newLabel.setAttribute('for', "skills-".concat(skillCount));
        newLabel.textContent = 'Skill:';
        var newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.name = 'skills';
        newInput.id = "skills-".concat(skillCount);
        newInput.classList.add('user-skills');
        var removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = 'Remove';
        (function (count) {
            removeButton.addEventListener('click', function () { return removeSkill(count); });
        })(skillCount);
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);
        newDiv.appendChild(removeButton);
        skillsContainer.appendChild(newDiv);
        skillCount++;
    });
    function removeSkill(id) {
        var skillToRemove = document.getElementById("skill-".concat(id));
        if (skillToRemove) {
            skillsContainer.removeChild(skillToRemove);
        }
    }
    var addEducationButton = document.getElementById('add-education');
    var educationContainer = document.getElementById('Education-container');
    var educationCount = 1;
    addEducationButton.addEventListener('click', function () {
        var newDiv = document.createElement('div');
        newDiv.classList.add('education-form');
        newDiv.setAttribute('id', "education-".concat(educationCount));
        var programPart = document.createElement('div');
        programPart.setAttribute('id', "program-part-".concat(educationCount));
        var programLabel = document.createElement('label');
        programLabel.setAttribute('for', "program-".concat(educationCount));
        programLabel.textContent = 'Program:';
        var programInput = document.createElement('input');
        programInput.type = 'text';
        programInput.name = 'program';
        programInput.id = "program-".concat(educationCount);
        programPart.appendChild(programLabel);
        programPart.appendChild(programInput);
        var schoolPart = document.createElement('div');
        schoolPart.setAttribute('id', "school-part-".concat(educationCount));
        var schoolLabel = document.createElement('label');
        schoolLabel.setAttribute('for', "school-".concat(educationCount));
        schoolLabel.textContent = 'School:';
        var schoolInput = document.createElement('input');
        schoolInput.type = 'text';
        schoolInput.name = 'school';
        schoolInput.id = "school-".concat(educationCount);
        schoolPart.appendChild(schoolLabel);
        schoolPart.appendChild(schoolInput);
        var removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.style.width = '24px';
        removeButton.style.height = '24px';
        removeButton.style.backgroundImage = "url('minus-sign.png')";
        removeButton.style.backgroundSize = 'contain';
        removeButton.style.backgroundRepeat = 'no-repeat';
        removeButton.style.border = 'none';
        (function (count) {
            removeButton.addEventListener('click', function () { return removeEducation(count); });
        })(educationCount);
        newDiv.appendChild(programPart);
        newDiv.appendChild(schoolPart);
        newDiv.appendChild(removeButton);
        educationContainer.appendChild(newDiv);
        educationCount++;
    });
    function removeEducation(id) {
        var educationToRemove = document.getElementById("education-".concat(id));
        if (educationToRemove) {
            educationContainer.removeChild(educationToRemove);
        }
    }
    var addExperienceButton = document.getElementById('add-experience');
    var experienceContainer = document.getElementById('Experience-container');
    var experienceCount = 1;
    addExperienceButton.addEventListener('click', function () {
        var newDiv = document.createElement('div');
        newDiv.classList.add('experience-form');
        newDiv.setAttribute('id', "experience-".concat(experienceCount));
        var positionPart = document.createElement('div');
        positionPart.setAttribute('id', "experience-position-part-".concat(experienceCount));
        var positionLabel = document.createElement('label');
        positionLabel.setAttribute('for', "position-".concat(experienceCount));
        positionLabel.textContent = 'Position:';
        var positionInput = document.createElement('input');
        positionInput.type = 'text';
        positionInput.name = 'position';
        positionInput.id = "position-".concat(experienceCount);
        positionPart.appendChild(positionLabel);
        positionPart.appendChild(positionInput);
        var durationPart = document.createElement('div');
        durationPart.setAttribute('id', "experience-duration-part-".concat(experienceCount));
        var durationLabel = document.createElement('label');
        durationLabel.setAttribute('for', "duration-".concat(experienceCount));
        durationLabel.textContent = 'Duration:';
        var durationInput = document.createElement('input');
        durationInput.type = 'text';
        durationInput.name = 'duration';
        durationInput.id = "duration-".concat(experienceCount);
        durationPart.appendChild(durationLabel);
        durationPart.appendChild(durationInput);
        var removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.style.width = '24px';
        removeButton.style.height = '24px';
        removeButton.style.backgroundImage = "url('minus-sign.png')";
        removeButton.style.backgroundSize = 'contain';
        removeButton.style.backgroundRepeat = 'no-repeat';
        removeButton.style.border = 'none';
        (function (count) {
            removeButton.addEventListener('click', function () { return removeExperience(count); });
        })(experienceCount);
        newDiv.appendChild(positionPart);
        newDiv.appendChild(durationPart);
        newDiv.appendChild(removeButton);
        experienceContainer.appendChild(newDiv);
        experienceCount++;
    });
    function removeExperience(id) {
        var experienceToRemove = document.getElementById("experience-".concat(id));
        if (experienceToRemove) {
            experienceContainer.removeChild(experienceToRemove);
        }
    }
    // Select the necessary elements
    // Handle Resume Generation
    var generateCVButton = document.getElementById('generatecv');
    var cvop = document.getElementById('cvop');
    generateCVButton.addEventListener('click', function () {
        cvop.style.display = "block";
        // Update personal details in CV
        var userName = document.getElementById('user-name');
        var userRole = document.getElementById('user-role');
        var userContact = document.getElementById('user-contact');
        var userEmail = document.getElementById('user-email');
        var userAddress = document.getElementById('user-address');
        document.getElementById('name-updated').innerText = userName.value;
        document.getElementById('role-updated').innerText = userRole.value;
        document.getElementById('number-updated').innerText = "Phone No: ".concat(userContact.value);
        document.getElementById('email-updated').innerText = "Email: ".concat(userEmail.value);
        document.getElementById('address-updated').innerText = "Address: ".concat(userAddress.value);
        var userProfile = document.getElementById('profile');
        var profileImage = document.getElementById('profile-updated');
        if (userProfile.files && userProfile.files[0]) {
            var file = userProfile.files[0]; // Get the selected file
            var reader = new FileReader(); // Create a FileReader to read the file
            // Set up a callback to run when the file has been read
            reader.onload = function (e) {
                if (e.target && profileImage) {
                    profileImage.src = e.target.result; // Set the img src to the file's data URL
                }
            };
            // Read the file as a Data URL (this will trigger the onload event)
            reader.readAsDataURL(file);
        }
        else {
            console.error('No file selected');
        }
        // Get and update skills
        var skillsListInCV = document.querySelector('.skills-list2');
        skillsListInCV.innerHTML = ''; // Clear existing skills
        var skillInputs = document.querySelectorAll('input[name="skills"]');
        skillInputs.forEach(function (input) {
            var skillValue = input.value.trim();
            if (skillValue) {
                var listItem = document.createElement('div');
                listItem.textContent = skillValue;
                skillsListInCV.appendChild(listItem);
            }
        });
        // Get and update education
        var educationListInCV = document.getElementById('education-list');
        educationListInCV.innerHTML = ''; // Clear existing education
        var educationInputs = document.querySelectorAll('.education-form');
        educationInputs.forEach(function (div) {
            var programInput = div.querySelector('input[name="program"]');
            var schoolInput = div.querySelector('input[name="school"]');
            var programValue = programInput.value.trim();
            var schoolValue = schoolInput.value.trim();
            if (programValue && schoolValue) {
                var listItem = document.createElement('li');
                listItem.textContent = "".concat(programValue, " at ").concat(schoolValue);
                educationListInCV.appendChild(listItem);
            }
        });
        // Get and update experience
        var experienceListInCV = document.getElementById('experience-list');
        experienceListInCV.innerHTML = ''; // Clear existing experience
        var experienceInputs = document.querySelectorAll('.experience-form');
        experienceInputs.forEach(function (div) {
            var positionInput = div.querySelector('input[name="position"]');
            var durationInput = div.querySelector('input[name="duration"]');
            var positionValue = positionInput.value.trim();
            var durationValue = durationInput.value.trim();
            if (positionValue && durationValue) {
                var listItem = document.createElement('li');
                listItem.textContent = "".concat(positionValue, " (").concat(durationValue, ")");
                experienceListInCV.appendChild(listItem);
            }
        });
    });
});
function generatePDF() {
    // Access jsPDF from the window object
    var jsPDF = window.jspdf.jsPDF;
    // Create a new jsPDF instance
    var doc = new jsPDF();
    // Add custom fonts
    doc.addFileToVFS("Roboto-Regular-normal.ttf", "BASE64_ENCODED_NORMAL_FONT_DATA");
    doc.addFileToVFS("Roboto-Bold-normal.ttf", "BASE64_ENCODED_BOLD_FONT_DATA");
    // Register the fonts
    doc.addFont("Roboto-Regular-normal.ttf", "Roboto", "normal");
    doc.addFont("Roboto-Bold-normal.ttf", "Roboto", "bold");
    // Set font to Roboto
    doc.setFont("Roboto", "normal");
    // Collect data from the CV
    var name = document.getElementById('name-updated').innerText;
    var role = document.getElementById('role-updated').innerText;
    var number = document.getElementById('number-updated').innerText;
    var email = document.getElementById('email-updated').innerText;
    var address = document.getElementById('address-updated').innerText;
    // Add user details to PDF
    doc.setFontSize(16); // Larger font size for section headers
    doc.setFont("Roboto", "bold");
    doc.text("Personal Details:", 10, 40); // Section title
    doc.setFont("Roboto", "normal");
    doc.setFontSize(14);
    doc.text("Name: ".concat(name), 10, 50);
    doc.text("Role: ".concat(role), 10, 60);
    doc.text("Contact Number: ".concat(number), 10, 70);
    doc.text("Email: ".concat(email), 10, 80);
    doc.text("Address: ".concat(address), 10, 90);
    // Add a line separator for sections
    doc.line(10, 100, 200, 100); // Line from (10, 100) to (200, 100)
    // Handle skills
    var skillsContainer = document.querySelector('.skills-list2');
    var skillsText = skillsContainer ? skillsContainer.innerText : '';
    var yOffset = 110;
    doc.setFont("Roboto", "bold");
    doc.text("Skills:", 10, yOffset);
    doc.setFont("Roboto", "normal");
    yOffset += 10;
    skillsText.split('\n').forEach(function (skill, index) {
        if (skill.trim()) {
            doc.text("\u2022 ".concat(skill.trim()), 15, yOffset); // Indent with bullet point
            yOffset += 10;
        }
    });
    // Add another line separator
    doc.line(10, yOffset, 200, yOffset); // Line to separate sections
    yOffset += 10;
    // Handle education
    var educationList = document.getElementById('education-list');
    var educationText = educationList ? educationList.innerText : '';
    doc.setFont("Roboto", "bold");
    doc.text("Education:", 10, yOffset);
    doc.setFont("Roboto", "normal");
    yOffset += 10;
    educationText.split('\n').forEach(function (edu, index) {
        if (edu.trim()) {
            doc.text("\u2022 ".concat(edu.trim()), 15, yOffset);
            yOffset += 10;
        }
    });
    // Add a line separator for sections
    doc.line(10, yOffset, 200, yOffset);
    yOffset += 10;
    // Handle experience
    var experienceList = document.getElementById('experience-list');
    var experienceText = experienceList ? experienceList.innerText : '';
    doc.setFont("Roboto", "bold");
    doc.text("Experience:", 10, yOffset);
    doc.setFont("Roboto", "normal");
    yOffset += 10;
    experienceText.split('\n').forEach(function (exp, index) {
        if (exp.trim()) {
            doc.text("\u2022 ".concat(exp.trim()), 15, yOffset);
            yOffset += 10;
        }
    });
    // Handle profile image
    var profileImage = document.getElementById('profile-updated');
    var imageSrc = profileImage.src;
    if (imageSrc) {
        // Convert image to base64 and add to PDF
        var img_1 = new Image();
        img_1.crossOrigin = 'Anonymous';
        img_1.onload = function () {
            var imgData = getBase64Image(img_1);
            doc.addImage(imgData, 'JPEG', 150, 10, 50, 50); // Adjust x, y, width, height
            // Save the PDF after adding the image
            doc.save("".concat(name, "-cv.pdf"));
        };
        img_1.src = imageSrc;
    }
    else {
        // If no image is selected, save the PDF without the image
        doc.save("".concat(name, "-cv.pdf"));
    }
}
// Function to convert image to base64
function getBase64Image(img) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        return '';
    }
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL('image/jpeg');
}
