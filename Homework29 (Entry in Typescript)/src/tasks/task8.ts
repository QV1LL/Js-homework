interface Person {
    name: string
}

interface Employee {
    salary: number
    department: string
}

type Developer = Person & Employee & { skills: string[] }

const programist: Developer = {
    name: 'Olexandr',
    salary: Number.MAX_VALUE,
    department: 'Класний',
    skills: [
        'C#',
        'PHP',
        'Java',
        'JavaScript',
        'TypeScript',
        'C++',
        'Python',
        'React',
        'Vue',
        'Angular',
        'HTML5',
        'CSS3',
        'Sass',
        'Tailwind CSS',
        'Bootstrap',
        'Alpine.js',
        'Next.js',
        'Nuxt.js',
        'Vite',
        '.NET',
        'Node.js',
        'Express.js',
        'Spring Boot',
        'Laravel',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'SQLite',
        'Redis',
        'Git',
        'GitHub',
        'Docker',
        'Kubernetes',
        'Linux',
        'Webpack',
        'PowerShell',
        'Nginx',
        'Postman',
        'VS Code',
        'Vim',
        'IntelliJ IDEA',
        'WPF',
        'WinUI 3',
        'JavaFX',
        'Blazor Hybrid',
        'Electron JS',
    ],
}

console.log(programist)
