
type Birthdate = {
    name: string;
    date: string
}

interface BirthdateProps {
    birthdates: Birthdate[];
}

const birthdates: Birthdate[] = [
    {
        name: 'Codechelle', 
        date: `August 6, ${new Date().getFullYear()}`,
    },
    {       
        name: 'Ace', 
        date: `December 29, ${new Date().getFullYear()}`,
    },
    {       
        name: 'Rikko', 
        date: `January 26, ${new Date().getFullYear()}`,
    },
    {       
        name: 'Deuce', 
        date: `May 22, ${new Date().getFullYear()}`,
    }
]

export { birthdates };
export type { BirthdateProps };