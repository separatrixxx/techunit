import { TeamInterface } from "../interfaces/team.interface";


export function getTeam(): TeamInterface[] {
    const team1: TeamInterface = {
        photo: '',
        name: 'John Doe',
        text: 'CEO',
    }

    const team2: TeamInterface = {
        photo: '',
        name: 'Jane Smith',
        text: 'CTO',
    }

    const team3: TeamInterface = {
        photo: '',
        name: 'Mike Johnson',
        text: 'Head of Design',
    }

    const team4: TeamInterface = {
        photo: '',
        name: 'Sarah Williams',
        text: 'Head of Marketing',
    }

    return [team1, team2, team3, team4];
}
