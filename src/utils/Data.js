import {FaReact, FaNode, FaCss3Alt, FaHome} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si'
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";

export const Skills =[

{

    id: 0,
    tech: 'React JS',
    icon: <FaReact/>

},
{

    id: 1,
    tech: 'Node JS',
    icon: <FaNode/>

},

{

    id: 2,
    tech: 'css',
    icon: <FaCss3Alt/>

},

{

    id: 3,
    tech: 'Javascript',
    icon: <SiJavascript/>

},

];

export const projectDetails =[
    {
        id:0,
        project_name: "Balaodi",
        project_desc: "BPS is a quintessential and extremely  diverse facilities maintenance and brand conservation firm.",
        tech_stack:['PHP', 'CSS', 'MVC', 'HTML'],
        project_img: Project1,
        project_url: "https://www.bpsglobal.biz",
        reverse:true,
    },

  

]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name:'My skills',
        href: 'Skills'
    },

    {
        id: 3,
        name: 'My Projects',
        href: 'Projects'
    },

    {
        id: 4,
        name: 'My Contact',
        href: 'Contact'
    },
]


    