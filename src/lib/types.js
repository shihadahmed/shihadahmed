/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} description
 * @property {string} [longDescription]
 * @property {string} [image]
 * @property {string[]} techStack
 * @property {string} [githubUrl]
 * @property {string} [liveUrl]
 * @property {boolean} featured
 * @property {'web'|'mobile'|'api'|'tool'|'library'} category
 * @property {string} startDate
 * @property {string} [endDate]
 * @property {string[]} [outcomes]
 */

/**
 * @typedef {Object} Skill
 * @property {string} name
 * @property {'frontend'|'backend'|'database'|'devops'|'tools'|'ui'} category
 * @property {1|2|3|4|5} proficiency
 * @property {string} [icon]
 * @property {number} [yearsExperience]
 */

/**
 * @typedef {Object} Experience
 * @property {string} id
 * @property {string} role
 * @property {string} company
 * @property {string} [companyUrl]
 * @property {string} location
 * @property {string} startDate
 * @property {string} [endDate]
 * @property {string} description
 * @property {string[]} achievements
 * @property {string[]} techStack
 * @property {'full-time'|'contract'|'freelance'|'internship'} type
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {string} author
 * @property {string} role
 * @property {string} company
 * @property {string} [avatar]
 * @property {string} content
 * @property {string} [project]
 * @property {string} date
 */

/**
 * @typedef {Object} BlogPost
 * @property {string} slug
 * @property {string} title
 * @property {string} date
 * @property {string} excerpt
 * @property {string[]} tags
 * @property {string} [coverImage]
 * @property {string} readingTime
 * @property {string} content
 */

/**
 * @typedef {Object} SiteConfig
 * @property {string} name
 * @property {string} title
 * @property {string} description
 * @property {string} url
 * @property {string} ogImage
 * @property {{github:string, linkedin:string, email:string, twitter?:string}} links
 * @property {{name:string, title:string, bio:string, location:string, email:string, avatar:string, resume:string}} [author]
 * @property {string[]} [keywords]
 */

/**
 * @typedef {Object} NavItem
 * @property {string} label
 * @property {string} href
 */