
export interface Formdata{
    name:string,
    post:string,
    phone:number,
    email:string,
    skill: Skills[],
    experience: Experience[],
    education: Education[]
}

interface Skills{
    skill: string
}

interface Experience{
    exp: string,
    post: string,
    year: string
}

interface Education{
    education:string,
    major:string,
    gpa:number
}