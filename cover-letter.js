
alert("Welcome to Andres' cover letter generator. Answer the following questions and receive your cover letter. Enjoy!");
const role =prompt("What position are you applying for?");
const companyName = prompt('What is the name of the company you are applying to?');

const today = new Date()
var month = today.toLocaleString('default', { month: 'long' })
var day = today.getDate()
var year = today.getFullYear()

const coverLetter= 
`<p> ANDRES PEREZ <br>
Deerfield Beach, FL 33442 | (C) (561) 213-7707 | AndresPerez327@Gmail.com <br><br>

${month} ${day}, ${year}<br>
RE: ${role} <br><br>
Dear ${companyName}, <br>
I read with enthusiasm your recent job opportunity as a ${role} and I am writing to express my deepest interest. When reviewing the position requirements and your organization’s website, I was excited to find that my qualifications and personal strengths align with your needs and mission.<br><br>

What a thrill it would be to work for your team! I would love to speak with you regarding the position and how I could be a key player on your team. It would be an honor and a blessing to be a part of your company of leaders.<br><br>

I bring a comprehensive set of skills that I believe will be valuable for your company. In my time as a student and a freelance web developer, I honed my abilities in both frontend and backend development, providing a firm foundation for the ${role} position. I am excited to contribute my talents and strengths to your teams efforts.<br><br>

Please review my enclosed resume for a more in-depth illustration of my work history and accomplishments. I would appreciate the opportunity to interview at your earliest convenience. I am eager to discuss how my personality and background fit the ${role} role.<br><br>

Please feel free to take a look at my project page below: <br>
<a href="https://witness327.github.io/Project-Page/index.html" target="_blank"><strong>Witness327.GitHub.io/Project-Page</strong></a> <br><br>

Thank you for your time and consideration of my candidacy<br>
Sincerely, Andres Perez </p>`

document.querySelector('main').innerHTML = coverLetter;
##you can elaborote more about yourself
