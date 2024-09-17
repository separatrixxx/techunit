import { TeamInterface } from "../interfaces/team.interface";


export function getTeam(): TeamInterface[] {
    const team1: TeamInterface = {
        photo: '/TeamImg1.webp',
        name: 'Alex Sim',
        text: 'Chief Marketing Strategist',
    }

    const team2: TeamInterface = {
        photo: '/TeamImg2.webp',
        name: 'Fuwei Shang',
        text: 'East Asia Import Manager',
    }

    const team3: TeamInterface = {
        photo: '/TeamImg3.webp',
        name: 'Dr. Angelo Colombo',
        text: 'Science & Business Development',
    }

    const team4: TeamInterface = {
        photo: '/TeamImg4.webp',
        name: 'Vladimír Marahovski',
        text: 'Project Manager',
    }

    return [team1, team2, team3, team4];
}
