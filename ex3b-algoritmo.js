/**
 *Queremos saber cuantas veces un determinado país ha ganado la champions 
 * Utiliza un método de array adecuado, no uses un bucle.
 * 
 * https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9
 *  
 * @param {array<object>} winnerList Array de objetos que contiene los equipos ganadores de cada temporada 
 * @param {string} country País que queremos comprobar 
 */

function countWins(winnerList, country) {
    // your awesome code here
    const count = winnerList.reduce( (total, winner) => winner.country === country ? total + 1 : total, 0);
    return count;
}

const winnerList1 = [
    { season: '1996-97', team: 'Borussia Dortmund', country: 'Germany' },
    { season: '1997-98', team: 'Real Madrid', country: 'Spain' },
    { season: '1998-99', team: 'Manchester United', country: 'England' },
    { season: '1999-00', team: 'Real Madrid', country: 'Spain' },
    { season: '2000-01', team: 'Bayern Munich', country: 'Germany' },
    { season: '2001-02', team: 'Real Madrid', country: 'Spain' },
    { season: '2002-03', team: 'Milan', country: 'Italy' },
    { season: '2003-04', team: 'Porto', country: 'Portugal' },
    { season: '2004-05', team: 'Liverpool', country: 'England' },
    { season: '2005-06', team: 'Barcelona', country: 'Spain' },
    { season: '2006-07', team: 'Milan', country: 'Italy' },
    { season: '2007-08', team: 'Manchester United', country: 'England' },
    { season: '2008-09', team: 'Barcelona', country: 'Spain' },
    { season: '2009-10', team: 'Internazionale', country: 'Italy' },
    { season: '2010-11', team: 'Barcelona', country: 'Spain' },
    { season: '2011-12', team: 'Chelsea', country: 'England' },
    { season: '2012-13', team: 'Bayern', country: 'Germany' },
    { season: '2013-14', team: 'Real Madrid', country: 'Spain' },
    { season: '2014-15', team: 'Barcelona', country: 'Spain' },
    { season: '2015-16', team: 'Real Madrid', country: 'Spain' }
];

// Caso de prueba 1: Comprobar cuántas veces ha ganado España
const result1 = countWins(winnerList1, 'Spain');
console.log(result1); // 9

// Caso de prueba 2: Comprobar cuántas veces ha ganado Alemania
const result2 = countWins(winnerList1, 'Germany');
console.log(result2); // 3

// Caso de prueba 3: Comprobar cuántas veces ha ganado Italia
const result3 = countWins(winnerList1, 'Italy');
console.log(result3); // 3

// Caso de prueba 4: Comprobar cuántas veces ha ganado Inglaterra
const result4 = countWins(winnerList1, 'England');
console.log(result4); // 4

// Caso de prueba 5: Comprobar cuántas veces ha ganado Portugal
const result5 = countWins(winnerList1, 'Portugal');
console.log(result5); // 1