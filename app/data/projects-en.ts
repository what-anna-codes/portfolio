export interface IProjectSection {
  title: string
  content: string
}

export interface IProjectStage {
  id: string;
  title: string;
  content: string;
  iconPath?: string;
}

export interface IProject {
  id: string
  name: string
  position?: number
  description?: string
  role?: string
  stack: Array<string>
  image?: string
  type: "play" | "work"
  code?: string
  demo?: string
  context?: string
  sections: Array<IProjectSection>
  stages?: Array<IProjectStage>;
}

export const projects_en: IProject[] = [
  {
    id: "project-001",
    name: "pattern hunt",
    description: "A browser-based version of the SET card game.",
    stack: [
      "Typescript",
      "React.js",
      "Apollo Client",
      "Hygraph",
      "motion.js"
    ],
    image: "set.png",
    type: "play",
    code: "https://github.com/what-anna-codes/set-online",
    demo: "https://what-anna-codes.github.io/set-online/",
    sections: [
      {
        title: "main features",
        content: `<ul>
      <li>use of SVG elements to accurately recreate the symbol shapes from the original card game</li>
      <li>development of deck generation and move validation algorithms based on the game's mathematical rules</li>
      <li>simplification of the styling layer by replacing SCSS with standard CSS</li>
      <li>addition of a timer and score saving using the Hygraph headless CMS</li>
    </ul>`
      }
    ],
    position: 3,
  },
  {
    id: "project-002",
    name: "responder module",
    stack: [
      "(ASP.NET Core) Blazor",
      "MongoDB"
    ],
    image: "responder.png",
    type: "work",
    description: "A module for automated and standardized email correspondence handling.",
    role: "email response workflow design followed by front-end implementation in a Blazor (ASP.NET) app.",
    context: `
    <div>The high volume of routinely handled messages created two main challenges:
    <ul>
      <li><strong>time-consuming workflows</strong> - responding to messages required significant time;</li>
      <li><strong>inconsistent communication</strong> - responses depended on individual employee decisions.</li>
    </ul></div>
    `, sections: [

      {
        title: "solutions",
        content: `
    <ul>
      <li><strong>design of a new page</strong> consistent with the project's UI and divided into three panels: information, operations, and process</li>
      <li><strong>structuring of the correspondence workflow</strong> based on the existing process graph; identification of two paths and division into actionable stages</li>
      <li><strong>presentation of the workflow to users</strong> as an interactive stage menu showing required tasks and linking directly to relevant tools</li>
      <li><strong>development of operational panels for each stage</strong>, including task descriptions, required tools, and results of completed actions</li>
      <li><strong>implementation of AI solutions</strong> for response scenario selection and message draft generation; development of a prompt editor supporting editing, local or global saving, and model selection</li>
      <li><strong>introduction of an automatic mode</strong> that executes subsequent workflow steps without manual handling</li>
    </ul>`,
      }
    ],
    position: 1,
  },
  {
    id: "project-007",
    name: "inspection reports with PowerBI",
    role: "report design, data modelling & visualization in PowerBI & support in the development of the underlying system - an integrated workflow automation solution",
    description: "Automatically generated PowerBI reports sourced from Sharepoint data",
    sections: [
      {
        title: "context",
        content: "<p>A component of an integrated solution <strong>automating property handover workflows</strong> at a leading construction companies.",
      }],
    stages: [
      {
        id: 'project-007-en-stage-1',
        title: 'data fetching',
        content: "fetch source data (apartment handover inspection checklists) from online SharePoint Lists to ensure every report is based on latest data",

      },
      {
        id: 'project-007-en-stage-2',
        title: 'raport design',
        content: "distribute planned content across report pages page views basing on the sources and reference materials provided by the client"
      },
      {
        id: 'project-007-en-stage-3',
        title: 'data modelling',
        content: "integrate and transform data from two separate sources (covering handover inspections and construction flaws) to develop a coherent semantic data model allowing easy access to all information relating to any single unit",
      },
      {
        id: 'project-007-en-stage-4',
        title: 'visualization',
        content: "build a standardized PowerBI report template for instant generation of handover documentation for over a hundred of newly completed properties."
      }
    ],

    stack: [
      "PowerBI",
      "Power Query",
      "Python"
    ],
    image: "inspection_reports.png",
    type: "work",
    position: 1,
  },
  {
    id: "project-003",
    name: "corporate food blog",
    description: "A blogging service for Restaurant Club, the organizer of Europe's largest dining festivals.",
    role: "frontend development, CMS config & administration, coordination between IT and the content team",

    stack: [
      "Strapi",
      "ckeditor",
      "Typescript",
      "Next.js",
      "Apollo Client",
      "styled-components",
      "Storybook"
    ],
    stages: [{
      id: 'project-003-en-stage-1',
      title: 'PLANNING',
      content: "Cross-department talks to clarify the project's vision, scope & schedule. Our success: an accepted set of user stories outlining our long list of feature ideas - grouped by priority and ready for updates in Jira."
    },
    {
      id: 'project-003-en-stage-2',

      title: 'DATA & CMS',
      content: `<div><ol>
<li>organization of planned contents into Strapi CMS data models to generate a structured GraphQL schema,</li>
<li>Strapi integration with <strong>ckeditor</strong> - a beautiful rich text editor that, incidentally, is now fully assimilated into the Strapi CMS & available out-of-the-box as a custom field,</li>
<li>ckeditor configuration (formatting options) to strike a balance between editorial flexibility with visual consistency of the layout.</li>
<li>roles & permissions management</li>
</ol></div>`,
    },
    {
      id: 'project-003-en-stage-3',

      title: "frontend",
      content: `<p>Development on the client side on the basis of the provided layout design in Figma.</p>
    <p>Main challenge: writing CSS rules for the rich-text editor content and ensure a fully consistent layout.</p>
    <p>Selected features: a carousel with articles for further reading; paginated publication history (infinite scroll); featured articles section (tricky to position as most text nodes could take 1-3 lines).</p>
`
    },
    {
      id: 'project-003-en-stage-4',

      title: "support",
      content: `My last tasks after deployment involved mostly training the content team to use Strapi CMS and addressing their questions as ongoing support. `
    }
    ],
    image: "blog.png",
    type: "work",
    sections: [
      {
        title: "takeaways",
        content: `Participation in the whole project lifecycle affected the way I looked at the IT industry (where I was still but a rookie junior). Suddenly, success wasn't just about writing code. It was about making decisions, collaboration, and ownership for more than the implementation itself. The experience sparked my curiosity in the bigger picture behind every app - which is probably why I welcomed the opportunity to take up a comparable role later on, at another startup.`
      }],
    position: 3,
  },
  {
    id: "project-004",
    name: "ticket booking platform",
    description: "The official website of Restaurant Club, a Polish company organizing Europe's largest dining festivals.",
    role: "Despite my lack of experience (the platform was my first real commercial project), the team gave me a chance to build entire views and complete modules. Example: the user panel.",
    image: "user_panel.png",
    stack: [
      "Typescript",
      "Next.js",
      "Apollo Client",
      "formik",
      "yup",
      "styled-components",
      "Storybook"
    ],
    type: "work",
    sections: [
      {
        title: "user panel: scope",
        content: `The design included four responsive pages sharing the same layout and navigation: order history, user favourites, account details & payment methods. As the site grew with time, we also added a separate page for marketing consent management.`
      },
      {
        title: 'user panel: main tasks',
        content: `<ul>
      <li><strong>pixel-perfect implementation of a Figma design</strong> in a TypeScript + Next.js app. My favourite element: a beautifully proportionate payment card.</li>
      <li><strong>robust forms</strong> combining Formik logic, front-end validation with Yup & backend error handling - all within <strong>a multilingual application</strong>.</li>
      <li><strong>external payments service integration</strong> necessary for payment card verification transactions (temporary test charges), triggered when user tries to add the card to their payment options.</li>
      <li><strong>component documentation in Storybook</strong></li>.
    </ul>`
      }],
  },
]