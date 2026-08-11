const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('public/Mohammed_Saqeeb_Khan_Resume.pdf'));

// Fonts and styling
const primaryColor = '#1e3a8a';
const textColor = '#333333';
const linkColor = '#2563eb';

// Header
doc.font('Helvetica-Bold').fontSize(24).text('Mohammed Saqeeb Khan', { align: 'center' });
doc.font('Helvetica').fontSize(14).fillColor(primaryColor).text('Full Stack Software Engineer', { align: 'center' }).moveDown(0.5);

doc.fontSize(10).fillColor(textColor).text('Bengaluru, India | alikhanmohammed342@gmail.com', { align: 'center' });
doc.fillColor(linkColor).text('LinkedIn: linkedin.com/in/mohammed-1-24b81a278 | GitHub: github.com/saqeebalimk', { link: 'https://www.linkedin.com/in/mohammed-1-24b81a278', align: 'center' }).moveDown(2);

// Section: Summary
doc.font('Helvetica-Bold').fontSize(14).fillColor(primaryColor).text('Professional Summary');
doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor(primaryColor).stroke().moveDown(0.5);
doc.font('Helvetica').fontSize(10).fillColor(textColor).text(
  'Full Stack Software Engineer with 4 years of professional experience building scalable web applications and production-ready software solutions across frontend, backend, and database layers. Experienced with React.js, Next.js, TypeScript, Node.js, Python, Django, REST APIs, and PostgreSQL. Expert in AI integrations, performance optimization, clean architecture, and technical SEO.'
).moveDown(1.5);

// Section: Technical Skills
doc.font('Helvetica-Bold').fontSize(14).fillColor(primaryColor).text('Technical Skills');
doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor(primaryColor).stroke().moveDown(0.5);
const skills = [
  'Languages: JavaScript, TypeScript, Python, Java, J2EE, SQL, HTML5, CSS3',
  'Frontend: React.js, Next.js, Angular 7/8+, Redux, React Router, Tailwind CSS, Bootstrap, Material UI, SCSS, Framer Motion, GSAP',
  'Backend: Node.js, Express.js, Django, Django REST Framework, Spring Boot, Spring MVC, Hibernate, JSP, Servlets, RESTful Web Services, SOAP Web Services, WS-Security, JWT, Authentication, Microservices',
  'Databases: PostgreSQL, MongoDB, MySQL, Redis, SQLite',
  'DevOps & Cloud: Git, GitHub, Docker, Linux, Nginx, Hostinger VPS, CI/CD, WebLogic, Tomcat, JBoss, Cloud Deployment',
  'AI & Automation: OpenAI API, Google Gemini, Gemini API, LLMs, Prompt Engineering, RAG, LangChain, Vector Databases, Automation'
];
doc.font('Helvetica').fontSize(10).fillColor(textColor);
skills.forEach(skill => {
  doc.text(`• ${skill}`);
});
doc.moveDown(1.5);

// Section: Experience
doc.font('Helvetica-Bold').fontSize(14).fillColor(primaryColor).text('Professional Experience');
doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor(primaryColor).stroke().moveDown(0.5);

doc.font('Helvetica-Bold').fontSize(12).fillColor(textColor).text('ARN Systems', { continued: true }).font('Helvetica').text(' | Full Stack Software Engineer | ', { continued: true }).font('Helvetica-Oblique').text('Dec 2024 – July 31 2026');
const exp1 = [
  'Developed enterprise web applications using React.js, Django and PostgreSQL.',
  'Designed and integrated scalable RESTful APIs.',
  'Built reusable frontend components improving development efficiency.',
  'Optimized application performance and database queries.',
  'Integrated AI-powered features into business workflows.'
];
doc.font('Helvetica').fontSize(10);
exp1.forEach(pt => doc.text(`  - ${pt}`));
doc.moveDown(1);

doc.font('Helvetica-Bold').fontSize(12).fillColor(textColor).text('SevenChats Pvt Ltd', { continued: true }).font('Helvetica').text(' | Software Engineer | ', { continued: true }).font('Helvetica-Oblique').text('Oct 2022 – Nov 2024');
const exp2 = [
  'Built responsive user interfaces using React.js.',
  'Integrated REST APIs for seamless frontend-backend communication.',
  'Implemented reusable UI components and optimized performance.',
  'Collaborated with designers and backend developers.',
  'Delivered production-ready features for a social networking platform.'
];
doc.font('Helvetica').fontSize(10);
exp2.forEach(pt => doc.text(`  - ${pt}`));
doc.moveDown(1.5);

// Section: Projects
doc.font('Helvetica-Bold').fontSize(14).fillColor(primaryColor).text('Selected Projects');
doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor(primaryColor).stroke().moveDown(0.5);

doc.font('Helvetica-Bold').fontSize(11).fillColor(textColor).text('JYNM — Junkyards Near Me');
doc.font('Helvetica-Oblique').fontSize(9).text('React, Django, PostgreSQL, Tailwind CSS, Technical SEO').moveDown(0.2);
doc.font('Helvetica').fontSize(10).text('  - Enterprise automotive salvage marketplace for lead generation and auto-part vendors.');
doc.text('  - Implemented 301 redirect strategies, backlink preservation, and technical SEO architecture.');
doc.text('  - Integrated JWT Authentication, Redis caching, and high-performance database migrations.').moveDown(0.8);

doc.font('Helvetica-Bold').fontSize(11).fillColor(textColor).text('AHA Technologies — AI-Powered Service Platform');
doc.font('Helvetica-Oblique').fontSize(9).text('Django, Python, OpenAI, WhatsApp API, PostgreSQL').moveDown(0.2);
doc.font('Helvetica').fontSize(10).text('  - Developed an AI-powered chatbot facilitating electronics and PCB diagnosis.');
doc.text('  - Integrated WhatsApp business API for seamless service booking workflows.');
doc.text('  - Implemented knowledge-based intent handling and image uploading for AI analysis.').moveDown(0.8);

doc.font('Helvetica-Bold').fontSize(11).fillColor(textColor).text('Transmission');
doc.font('Helvetica-Oblique').fontSize(9).text('Enterprise Software Engineering').moveDown(0.2);
doc.font('Helvetica').fontSize(10).text('  - Delivered completed professional software project with high-quality engineering standards.');
doc.text('  - Demonstrated clean architecture, reliable production deployment, and system integration.').moveDown(0.8);

doc.end();
