import { TeamInterface } from "../interfaces/team.interface";


export function getTeam(): TeamInterface[] {
    const team1: TeamInterface = {
        photo: '1',
        name: 'John Doe',
        text: 'CEO',
    }

    const team2: TeamInterface = {
        photo: '2',
        name: 'Jane Smith',
        text: 'CTO',
    }

    const team3: TeamInterface = {
        photo: '3',
        name: 'Mike Johnson',
        text: 'Head of Design',
    }

    const team4: TeamInterface = {
        photo: '4',
        name: 'Sarah Williams',
        text: 'Head of Marketing',
    }

    return [team1, team2, team3, team4];
}
