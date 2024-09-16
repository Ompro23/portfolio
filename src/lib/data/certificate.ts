// certificate.ts

export interface Certificate {
    name: string;
    issuer: string;
    date: Date;
    description: string;
    image: string;
    link: string;
}

export const title = 'Certificates';

export const certificates: Certificate[] = [
    {
        name: "AI/ML for Geodata Analysis",
        issuer: "ISRO",
        date: new Date("2024-09-03"),
        description: "Comprehensive course covering HTML, CSS, and JavaScript basics.",
        image: "/certificates/ISRO.png",
        link: "https://onedrive.live.com/?authkey=%21ABuJ%2Dm25beq0iZY&id=9758D34EE6005BC3%211064&cid=9758D34EE6005BC3&parId=root&parQt=sharedby&o=OneUp"
    },
    {
        name: "Certification of Participation",
        issuer: "Department of Computer Applications | MSU",
        date: new Date("2024-02-24"),
        description: "In-depth course on using Python for data analysis and visualization.",
        image: "/certificates/openhouse2024.png",
        link: "https://onedrive.live.com/?authkey=%21AKR%2DGlYKhRJfELM&id=9758D34EE6005BC3%21635&cid=9758D34EE6005BC3&parId=root&parQt=sharedby&o=OneUp"
    },
    {
        name: "Certificate of Completion",
        issuer: "Postman",
        date: new Date("2023-12-25"),
        description: "Foundational certification for understanding AWS Cloud concepts.",
        image: "/certificates/postman.png",
        link: "https://onedrive.live.com/?authkey=%21AHrtYHB4ZHfydHo&id=9758D34EE6005BC3%21260&cid=9758D34EE6005BC3&parId=root&parQt=sharedby&o=OneUp"
    },
    {
        name: "Certificate of Publication",
        issuer: "International Journal of Intelligent System and Applications in Engineering",
        date: new Date("2024-02-01"),
        description: "Foundational certification for understanding AWS Cloud concepts.",
        image: "/certificates/ijisae.png",
        link: "https://onedrive.live.com/?authkey=%21AMeROmWmQWGL%2D8I&id=9758D34EE6005BC3%21597&cid=9758D34EE6005BC3&parId=root&parQt=sharedby&o=OneUp"
    }
    ,
    {
        name: "Certificate of Participation",
        issuer: "Department of Computer Applications | MSU",
        date: new Date("2022-11-08"),
        description: "Foundational certification for understanding AWS Cloud concepts.",
        image: "/certificates/cs.jpeg",
        link: "https://photos.onedrive.com/share/9758D34EE6005BC3!259?cid=9758D34EE6005BC3&resId=9758D34EE6005BC3!259&authkey=!AIclR1FGv-xXNBo&ithint=photo&e=FL3IX5"
    },
    {
        name: "Certification of Winning",
        issuer: "Department of Computer Applications | MSU",
        date: new Date("2022-02-27"),
        description: "Foundational certification for understanding AWS Cloud concepts.",
        image: "/certificates/iot.jpeg",
        link: "https://photos.onedrive.com/share/9758D34EE6005BC3!254?cid=9758D34EE6005BC3&resId=9758D34EE6005BC3!254&authkey=!APBF433KLV-dPSw&ithint=photo&e=o82zAv"
    },
    {
        name: "Microsoft Learn Student Ambassador",
        issuer: "Microsoft",
        date: new Date("2024-01-10"),
        description: "Foundational certification for understanding AWS Cloud concepts.",
        image: "/certificates/mlsa.png",
        link: "https://onedrive.live.com/?authkey=%21ALzTmVlTa0ypXyM&id=9758D34EE6005BC3%21347&cid=9758D34EE6005BC3&parId=root&parQt=sharedby&o=OneUp"
    },
    {
        name: "Certificate of Presentation",
        issuer: "Institute of Research and Journal",
        date: new Date("2023-10-19"),
        description: "Foundational certification for understanding AWS Cloud concepts.",
        image: "/certificates/iraj.jpeg",
        link: "https://photos.onedrive.com/share/9758D34EE6005BC3!256?cid=9758D34EE6005BC3&resId=9758D34EE6005BC3!256&authkey=!AHOdA0u_n8Wcae8&ithint=photo&e=7StywT"
    },
    {
        name: "Internship Certificate",
        issuer: "Department of Computer Applications | MSU",
        date: new Date("2024-07-15"),
        description: "Foundational certification for understanding AWS Cloud concepts.",
        image: "/certificates/summerintern.jpeg",
        link: "https://photos.onedrive.com/share/9758D34EE6005BC3!258?cid=9758D34EE6005BC3&resId=9758D34EE6005BC3!258&authkey=!AHCMyUzfB-Qlztc&ithint=photo&e=shhOuJ"
    }
    
];