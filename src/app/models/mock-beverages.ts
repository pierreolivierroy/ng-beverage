import { Beverage } from './beverage';
import { BeverageType } from './beverage-type';

export const BEVERAGES: Beverage[] = [
    {
        id: 1,
        type: BeverageType.water,
        volume: 330,
        name: 'Eau',
        company: 'Naya',
        price: 1.00
    },
    {
        id: 2,
        type: BeverageType.beer,
        volume: 500,
        name: 'Yakima',
        company: 'Le Castor',
        price: 6.00
    },
    {
        id: 3,
        type: BeverageType.beer,
        volume: 750,
        name: 'Lou Pépé',
        company: 'Cantillon',
        price: 25.00
    },
    {
        id: 4,
        type: BeverageType.wine,
        volume: 750,
        name: 'Du gros rouge',
        company: 'Vins de Cahors',
        price: 18.00
    },
    {
        id: 5,
        type: BeverageType.softDrink,
        volume: 355,
        name: 'Racinette',
        company: 'Compagnie de racines',
        price: 2.50
    },
    {
        id: 6,
        type: BeverageType.other,
        volume: 355,
        name: 'Gros Kombucha',
        company: 'Fous de l\'île',
        price: 4.00
    },
    {
        id: 7,
        type: BeverageType.other,
        volume: 60,
        name: 'Jacques-au-Miel',
        company: 'Les Jacqueux',
        price: 12.00
    }
];