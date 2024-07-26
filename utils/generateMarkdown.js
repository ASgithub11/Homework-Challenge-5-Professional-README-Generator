// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeApache = '![License: Apache](https://img.shields.io/badge/License-Apache-blue)';
  const badgeMIT = '![License: MIT](https://img.shields.io/badge/License-MIT-blue)';
  const badgeISC = '![License: ISC](https://img.shields.io/badge/License-ISC-blue)';
  const badgeGPL = '![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue)';
  
  if (license === 'Apache') {  
    return badgeApache;
  } else if (license === 'MIT') {
    return badgeMIT; 
  } else if (license === 'ISC') {
    return badgeISC;
  } else if (license === 'GPLv3') {
    return badgeGPL;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
