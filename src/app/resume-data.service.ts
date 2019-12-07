import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

    constructor() { }

    data: object = {
        technologies : {
            aws : { description: 'Amazon Web Services', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/Amazon-Web-Services' },
            php5 : { description: 'PHP 5.x (Procedural) (Provided by website service and self-configured)', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/PHP' },
            php7 : { description: 'PHP 7.x (Procedural & PDO) (Provided by website service and self-configured)', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/PHP' },
            linux : { description: 'Linux (usually Ubuntu 18.04.x & 19.04.x) (Provided by website service and self-configured)', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/Linux' },
            apache : { description: 'Apache 2 (Provided by website service and self-configured)', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/Apache' },
            mysql : { description: 'MySQL 5.x (Provided by website service and self-configured)', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/MySQL' },
            css : { description: 'CSS/Bootstrap', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/CSS' },
            html : { description: 'HTML', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/HTML' },
            angular : { description: 'Angular', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/Angular' },
            jquery : { description: 'jQuery', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/jQuery' },
            javascript : { description: 'JavaScript', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/JavaScript' },
            git : { description: 'Git', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/Git' },
            api : { description: 'API and Web Services', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/API-and-Web-Services' },
            mvc : { description: 'MVC (Model View Controller)', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/MVC' },
            asp : { description: 'ASP.Net', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/ASP.Net' },
            iis : { description: 'IIS (Self-configured)', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/IIS' },
            wordpress : { description: 'WordPress', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/WordPress' },
            npm : { description: 'NPM', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/NPM' }, 
            postman : { description: 'Adobe\'s Line of Products', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/Postman' },
            react : { description: 'React', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/React' }, 
            typescript : { description: 'TypeScript', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/TypeScript' },
            adobe : { description: 'Adobe\'s Line of Products', wiki: 'https://github.com/devfecta/devfecta.github.io/wiki/Adobe' }
        },

        jobs: [ 
            {
                companyName : "DevFecta",
                jobTitle : 'Web Developer',
                city : 'Fitchburg, WI',
                description : 'Design and develop websites using an array of technologies, languages, and frameworks, along with providing graphic design services.',
                technologiesUsed : ['linux', 'php5', 'php7', 'apache', 'mysql', 'angular', 'react', 'jquery', 'javascript', 'typescript', 'css', 'html', 'git', 'api', 'mvc', 'wordpress', 'npm', 'postman'],
                startDate: 'March 2008',
                endDate: 'Present'
            },
            {
                companyName : "Paradigm",
                jobTitle : 'Graphic Designer',
                city : 'Middleton, WI',
                description : 'Designed all advertising and promotional materials, developed and maintained the company’s website, and assisted with development of product knowledge code.',
                technologiesUsed : ['css', 'html', 'jquery', 'javascript', 'asp', 'iis', 'adobe'],
                startDate: 'September 2003',
                endDate: 'March 2008'
            },
            {
                companyName : "Nasco",
                jobTitle : 'Web Designer',
                city : 'Fort Atkinson, WI',
                description : 'Designed concepts for Nasco’s e-commerce website, worked with development team to implement webpage layouts, and trained new members of the web team on the development process.',
                technologiesUsed : ['css', 'html', 'javascript', 'adobe'],
                startDate: 'September 1999',
                endDate: 'September 2003'
            }
        ],

        clients : [
            {name: 'Alt\'s Operation'}
            , {name: 'Be Dynamic Training'}
            , {name: 'Firefighter Dynamic Performance Training'}
            , {name: 'First, Responde Well'}
            , {name: 'Fitchburg Fire & Rescue Association'}
            , {name: 'It\'s Advertising'}
            , {name: 'Kinergetics'}
            , {name: 'Metal Decor Studios'}
            , {name: 'Monkeyshines'}
            , {name: 'Prosource'}
            , {name: 'South Central Regional Trauma Advisory Council'}
            , {name: 'South Central Wisconsin Healthcare Emergency Readiness Coalition'}
            , {name: 'Townedge'}
            , {name: 'Wisconsin State Fire Inspectors Association'}
        ]
    }

}
