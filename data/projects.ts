export type ProjectRecord = {
    id: string;
    name: string;
    image: string;          // wide banner
    logo: string;           // small circle
    description: string;
    tags: string[];
    links: { label: string; url: string }[];
    style: {
      /** card background */
      cardBg?: string;
      /** border colour */
      cardBorder?: string;
      /** tag pill colour */
      tagColour?: string;
      /** font family (falls back to pixel-game) */
      font?: string;
      /** tag font colour */
      tagFontColour?: string;
      /** link colour */
      linkColour?: string;
    };
  };
  
  export const projects: ProjectRecord[] = [
    {
      id: 'nn',
      name: 'Neon Nexous',
      image: '/projects/nn/banner.gif',
      logo: '/projects/nn/logo.png',
      description:
        'A Roblox sandbox tycoon emphasizing creativity, automation, and player-driven progression, breaking away from the linear workflows of traditional tycoon games. Inspired by Miner’s Haven (2015), we modernize the dynamic tycoon genre and focus on delivering an engaging experience that prioritizes player freedom and innovation from scratch.',
      tags: ['Game Dev', 'TypeScript', 'Lua', 'Roblox Studio', 'RobloxTS', 'Rojo', 'UI/UX', '3D-Modeling', 'Agile', 'GitHub', 'Node.js'],
      links: [
        { label: 'Game Link', url: 'https://www.roblox.com/games/118356985761490/Neon-Nexous-Sandbox-Tycoon' },
        { label: 'GitHub', url: 'https://github.com/garbearrr/Neon-Nexous' },
        { label: 'Wiki', url: 'https://github.com/garbearrr/Neon-Nexous/wiki'}
      ],
      style: {
        cardBg: 'rgba(0,0,0,0.55)',
        cardBorder: 'rgba(0,255,255,0.5)',
        tagColour: '#ff00cc',
        linkColour: '#ff00cc',
        font: '"Orbitron", sans-serif',
      },
    },
  
    {
        id: 'cltd',
        name: 'Command Line Tower Defense',
        image: '/projects/cltd/banner.png',
        logo: '/projects/cltd/logo.png',
        description:
            'A unique twist on the tower defense genre, where players build towers and manage resources through a command line interface. Currently in development.',
        tags: ['Game Dev', 'Love2D', 'TypeScript', 'Lua', 'Node.js', 'UI/UX', 'TSTL', 'Game Engine'],
        links: [
            { label: 'GitHub', url: 'https://github.com/garbearrr/CLTD_Love2D' }
        ],
        style: {
            cardBg: 'rgba(0,0,0,.9)',
            cardBorder: 'rgba(255,255,255,1)',
            tagColour: 'rgba(0,0,0,1)',
            tagFontColour: 'rgba(255,255,255,1)',
            linkColour: 'rgba(255,255,255,1)',
            font: '"Consolas", sans-serif',
        },
    },

    {
      id: 'vr-genai-testing',
      name: 'Utilizing Generative AI for VR Exploration Testing',
      image: '/projects/vr-genai/banner.png',
      logo: '/projects/vr-genai/logo.png',
      description:
        'A published case study exploring the use of Generative AI (GPT-4o) for field of view (FOV) analysis in virtual reality GUI testing. We demonstrate GenAI’s potential for test entity selection and action suggestion, achieving a 63% identification accuracy in arbitrary FOVs, while identifying its limitations in spatial reasoning and suggesting future improvements.\n\nCompleted as a paid Research Assistant @ Villanova University.',
      tags: [
        'Research',
        'Generative AI',
        'GPT-4o',
        'Virtual Reality',
        'VR Testing',
        'GUI Testing',
        'FOV Analysis',
        'AI-Assisted Testing',
        'Computer Vision',
        'Human-Computer Interaction',
        'IEEE/ACM',
        'ASE Workshop',
        'Technical Paper'
      ],
      links: [
        {
          label: 'ACM Digital Library',
          url: 'https://dl.acm.org/doi/abs/10.1145/3691621.3694955'
        },
        {
          label: 'Google Scholar',
          url: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=xPj5STQAAAAJ&citation_for_view=xPj5STQAAAAJ:ufrVoPGSRksC' // Replace with actual Scholar link
        }
      ],
      style: {
        cardBg: 'rgba(20, 20, 20, 0.8)',
        cardBorder: 'rgba(255, 255, 255, 0.3)',
        tagColour: '#0088ff',
        linkColour: '#00ccff',
        font: '"IBM Plex Sans", sans-serif',
        tagFontColour: '#ffffff'
      }
    },

    {
      id: 'test2va',
      name: 'Test2VA: Reusing Test Code for Voice Assistant Development',
      image: '/projects/test2va/banner.png',
      logo: '/projects/test2va/logo.png',
      description:
        'Test2VA is a research project that automates the reuse of GUI test scripts to generate task-executing methods for voice assistant (VA) features in Android apps. Using a mutation-based detection pipeline and structural parsing, the tool achieved a 75.68% success rate across 48 real-world app cases. Developed with Appium, Espresso, and OpenAI APIs, it provides a scalable, developer-centric solution for integrating VAs into mobile apps without writing new logic.\n\nCompleted as a paid Research Assistant @ Villanova University.',
      tags: [
        'Research',
        'GUI Testing',
        'Voice Assistant',
        'Android',
        'Appium',
        'Espresso',
        'Python',
        'Java',
        'UI/UX',
        'tkinter',
        'CLI',
        'pip',
        'srcML',
        'AI-Assisted Development',
        'Code Reuse',
        'Mutation Testing',
        'Prompt Engineering',
        'OpenAI API',
        'Accessibility',
        'Test Automation',
        'Under Review',
        'TOSEM'
      ],
      links: [
        {
          label: 'arXiv Preprint',
          url: 'https://arxiv.org/abs/2407.18155'
        },
        {
          label: 'Project Site',
          url: 'https://sites.google.com/view/test2va'
        }
      ],
      style: {
        cardBg: 'rgba(10, 20, 30, 0.85)',
        cardBorder: '#1f538d',
        tagColour: '#1f538d',
        linkColour: '#1f538d',
        tagFontColour: '#FFFFFF',
        font: '"Courier New", monospace',
      }
    },
    
    {
      id: 'discord-bot',
      name: 'Verified Discord Bot',
      image: '/projects/discord-bot/banner.png',
      logo: '/projects/discord-bot/logo.png',
      description:
        'A verified Discord bot offering interactive games like blackjack using programmatically generated images, delivering seamless real-time multiplayer mechanics and persistent cross-server state management. With over 10,000 active users across 125+ servers, the bot prioritized performance (99.9% uptime) and user retention through adaptive analytics, community feedback loops, and visual game responses.',
      tags: [
        'Discord.js',
        'Discord Bot',
        'Node.js',
        'MongoDB',
        'SQL',
        'Game Dev',
        'Image Generation',
        'Real-time Systems',
        'User Analytics',
        'Community Engagement',
        'Client/Server',
        'RESTful',
        'API'
      ],
      links: [
        {
          label: 'SQL Example',
          url: 'https://github.com/garbearrr/db-sys-final'
        },
        {
          label: 'Last Chips Version',
          url: 'https://github.com/garbearrr/chips-final'
        }
      ],
      style: {
        cardBg: 'rgba(54, 57, 63, 0.9)', // Discord's dark mode aesthetic
        cardBorder: 'rgba(114, 137, 218, 0.6)', // Discord blurple
        tagColour: '#7289da',
        tagFontColour: '#ffffff',
        linkColour: '#99aab5',
        font: '"Rubik", sans-serif'
      }
    },

    {
      id: 'superhot-moreapps',
      name: 'Superhot MOREApps (MelonLoader Mod)',
      image: '/projects/superhot-moreapps/banner.png',
      logo: '/projects/superhot-moreapps/logo.png',
      description:
        'A MelonLoader mod for SUPERHOT that re-enables unused piOs apps and ports hidden or inaccessible content from SUPERHOT: Mind Control Delete. This mod uncovers developer-left assets, enhances interactivity, and restores app elements originally cut from the base game, enriching the gameplay experience for fans and modding enthusiasts.',
      tags: [
        'Game Modding',
        'MelonLoader',
        'C#',
        'Reverse Engineering',
        'Unity',
        'SUPERHOT',
        'Mind Control Delete',
        'Content Restoration',
        'App Systems',
        'Exploratory Modding'
      ],
      links: [
        {
          label: 'GitHub Repo',
          url: 'https://github.com/garbearrr/Superhot-MOREApps'
        },
        {
          label: 'MelonLoader',
          url: 'https://melonwiki.xyz/#/'
        }
      ],
      style: {
        cardBg: 'rgba(30, 0, 0, 0.9)',
        cardBorder: 'rgba(255, 0, 0, 0.4)',
        tagColour: '#ff0033',
        tagFontColour: '#ffffff',
        linkColour: '#ff5555',
        font: '"Share Tech Mono", monospace'
      }
    },

    {
      id: 'portfolio-site',
      name: 'Portfolio Website',
      image: '/projects/portfolio/banner.png',
      logo: '/projects/portfolio/logo.png',
      description:
        'A responsive, custom-built portfolio website showcasing projects, research, and publications.',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'UI/UX',
        'AWS',
        'Apache',
        'HTML/CSS'
      ],
      links: [
        {
          label: 'Live Site',
          url: 'https://gweav.dev'
        },
        {
          label: 'GitHub Repo',
          url: 'https://github.com/garbearrr/my-portfolio'
        }
      ],
      style: {
        cardBg: 'rgba(0, 0, 10, 0.85)',
        cardBorder: 'rgba(0, 255, 255, 0.4)',
        tagColour: '#0ef1f1',
        tagFontColour: '#000000',
        linkColour: '#00ffff',
        font: '"pixel-game", sans-serif'
      }
    }
    
  ];
  