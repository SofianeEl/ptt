
export const levelOptions = ['amateur', 'confirmé', 'professionnel']
export type LevelOptions = typeof levelOptions[number]

export interface Tournoi {
  id: string
  name: string
  date: number
  description?: string
  locationId?: string
  peopleCount?: number
  level?: LevelOptions
}

export interface Location {
  id: string
  name: string
  address: string
  city: string
  district: number
  image: string
}



export function getLocationById(id: string): Location | undefined {
  return locations.find(it => it.id == id)
}


export const locations: Location[] = [
  { id: '1', name: 'Square Émile-Chautemps', address: '263 Rue Saint-Martin', city: 'Paris', district: 3, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '2', name: 'Jardin de l-Hôtel-Salé Léonor-Fini', address: '263 Rue Saint-Martin', city: 'Paris', district: 3, image: '/assets/location/Guilhem-Vellut-1-2.jpg' },
  { id: '3', name: 'Square du Temple', address: '263 Rue Saint-Martin', city: 'Paris', district: 3, image: '/assets/location/temple.jpg' },
  { id: '127', name: 'Jardin des Grands-Explorateurs Marco-Polo et Cavelier-de-la-Salle', address: '263 Rue Saint-Martin', city: 'Paris', district: 6, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '4', name: 'Square Pierre-de-Gaulle', address: '263 Rue Saint-Martin', city: 'Paris', district: 7, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '5', name: 'Square Marcel-Pagnol', address: '263 Rue Saint-Martin', city: 'Paris', district: 8, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '128', name: 'Square Montholon', address: '263 Rue Saint-Martin', city: 'Paris', district: 9, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '6', name: 'Square Amadou-Hampaté-Bâ', address: '263 Rue Saint-Martin', city: 'Paris', district: 10, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '7', name: 'Square Montholon', address: '263 Rue Saint-Martin', city: 'Paris', district: 10, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '8', name: 'Square Amadou-Hampaté-Bâ', address: '263 Rue Saint-Martin', city: 'Paris', district: 10, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '9', name: 'Square Eugène-Varlin', address: '263 Rue Saint-Martin', city: 'Paris', district: 10, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '10', name: 'Square des Récollets', address: '263 Rue Saint-Martin', city: 'Paris', district: 10, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '11', name: 'Jardin Madeleine-Tribolati', address: '263 Rue Saint-Martin', city: 'Paris', district: 10, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '12', name: 'Jardin May-Picqueray', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '13', name: 'Square Richard-Lenoir', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '14', name: 'Square Émile-Chautemps', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '15', name: 'Square de la Folie-Regnault', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '16', name: 'Jardin de lImpasse des Jardiniers', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '17', name: 'Square Maurice-Gardette', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '18', name: 'Square Jean-Allemane', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '19', name: 'Jardin Pierre-Joseph-Redouté', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '20', name: 'Square Raoul-Nordling', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '21', name: 'Jardin Madeleine-Tribolati', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '22', name: 'Jardin Damia', address: '263 Rue Saint-Martin', city: 'Paris', district: 11, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '23', name: 'Jardin d’immeubles Carnot', address: '263 Rue Saint-Martin', city: 'Paris', district: 12, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '24', name: 'Square Charles-Péguy', address: '263 Rue Saint-Martin', city: 'Paris', district: 12, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '25', name: 'Square Émile-Cohl', address: '263 Rue Saint-Martin', city: 'Paris', district: 12, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '26', name: 'Jardin Ilan-Halimi', address: '263 Rue Saint-Martin', city: 'Paris', district: 12, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '27', name: 'Square Philippe-Farine', address: '263 Rue Saint-Martin', city: 'Paris', district: 12, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '28', name: 'Square Georges-Méliès', address: '263 Rue Saint-Martin', city: 'Paris', district: 12, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '29', name: 'Square Jean-Morin', address: '263 Rue Saint-Martin', city: 'Paris', district: 12, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '30', name: 'Parc Floral de Paris', address: '263 Rue Saint-Martin', city: 'Paris', district: 12, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '31', name: 'Square Saint-Éloi', address: '263 Rue Saint-Martin', city: 'Paris', district: 12, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '32', name: 'Square Trousseau', address: '263 Rue Saint-Martin', city: 'Paris', district: 12, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '33', name: 'Jardin Clara-Zetkin', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '34', name: 'Jardin Brassaï', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '35', name: 'Parc de Choisy', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '36', name: 'Jardin de la Dalle-d’Ivry', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '37', name: 'Square Paul-Grimault', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '38', name: 'Jardin Samuel-Beckett', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '39', name: 'Square Gustave-Mesureur', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '40', name: 'Square Henri-Cadiou', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '41', name: 'JJardin des Deux-Moulins', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '42', name: 'Parc Kellermann', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '43', name: 'Square de la Raffinerie-Say', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '44', name: 'Square Montgolfière', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '45', name: 'Jardin du Moulin-de-la-Pointe', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '46', name: 'Square René-Le-Gall', address: '263 Rue Saint-Martin', city: 'Paris', district: 13, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '47', name: 'Square Aspirant-Dunand', address: '263 Rue Saint-Martin', city: 'Paris', district: 14, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '48', name: 'Square Auguste-Renoir', address: '263 Rue Saint-Martin', city: 'Paris', district: 14, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '49', name: 'Square du Cardinal-Wyczyński', address: '263 Rue Saint-Martin', city: 'Paris', district: 14, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '50', name: 'Square du Chanoine-Viollet', address: '263 Rue Saint-Martin', city: 'Paris', district: 14, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '51', name: 'Square Georges-Lamarque', address: '263 Rue Saint-Martin', city: 'Paris', district: 14, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '52', name: 'Square des Jonquilles', address: '263 Rue Saint-Martin', city: 'Paris', district: 14, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '53', name: 'Square Julia-Bartet', address: '263 Rue Saint-Martin', city: 'Paris', district: 14, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '54', name: 'Jardin d’Immeubles Maurice-Noguès', address: '263 Rue Saint-Martin', city: 'Paris', district: 14, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '55', name: 'Jardin du Moulin-de-la-Vierge', address: '263 Rue Saint-Martin', city: 'Paris', district: 14, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '56', name: 'Square Jules-Durand', address: '263 Rue Saint-Martin', city: 'Paris', district: 14, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '57', name: 'Square du Serment-de-Koufra', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '58', name: 'Jardin Alleray-Procession', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '59', name: 'Parc André-Citroën', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '60', name: 'Jardin Atlantique', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '61', name: 'Square Bartholomé', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '62', name: 'Square Blomet', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '63', name: 'Square du Clos-Feuquières', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '64', name: 'Square Commerce', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '65', name: 'Square du Docteur-Calmette', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '66', name: 'Jardin Duranton', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '67', name: 'Parc Georges-Brassens', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '68', name: 'Square Pablo-Casals', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '69', name: 'Square Pierre-Adrien-Dalpayrat', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '70', name: 'Square Saint-Lambert', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '71', name: 'Square Violet', address: '263 Rue Saint-Martin', city: 'Paris', district: 15, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '72', name: 'Square Alexandre-et-René-Parodi', address: '263 Rue Saint-Martin', city: 'Paris', district: 16, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '73', name: 'Pré Catelan', address: '263 Rue Saint-Martin', city: 'Paris', district: 16, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '74', name: 'Square Roger-Coquoin', address: '263 Rue Saint-Martin', city: 'Paris', district: 16, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '75', name: 'Jardin du Général-Anselin', address: '263 Rue Saint-Martin', city: 'Paris', district: 16, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '76', name: 'Jardin de la Porte-de-Saint-Cloud', address: '263 Rue Saint-Martin', city: 'Paris', district: 16, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '77', name: 'Jardin du Ranelagh', address: '263 Rue Saint-Martin', city: 'Paris', district: 16, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '78', name: 'Square Robert-Schuman', address: '263 Rue Saint-Martin', city: 'Paris', district: 16, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '79', name: 'Jardin Christiane-Desroches-Noblecourta', address: '263 Rue Saint-Martin', city: 'Paris', district: 16, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '80', name: 'Jardin Jardin André-Ulmann', address: '263 Rue Saint-Martin', city: 'Paris', district: 17, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '81', name: 'Square des Batignolles', address: '263 Rue Saint-Martin', city: 'Paris', district: 17, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '82', name: 'Promenade Bernard-Lafay', address: '263 Rue Saint-Martin', city: 'Paris', district: 17, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '83', name: 'Square Émile-Borel', address: '263 Rue Saint-Martin', city: 'Paris', district: 17, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '84', name: 'Square Jacques-Audiberti', address: '263 Rue Saint-Martin', city: 'Paris', district: 17, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '85', name: 'Square Lily-Laskine', address: '263 Rue Saint-Martin', city: 'Paris', district: 17, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '86', name: 'Square Paul-Paray', address: '263 Rue Saint-Martin', city: 'Paris', district: 17, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '87', name: 'Promenade Pereire', address: '263 Rue Saint-Martin', city: 'Paris', district: 17, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '88', name: 'Square Carpeaux', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '89', name: 'Square Charles-Hermite', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '90', name: 'Square Maurice-Kriegel-Valrimont', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '91', name: 'Square Henri-Huchard', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '92', name: 'Square Jehan-Rictus', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '93', name: 'Square de la Madone', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '94', name: 'Square Léon-Serpollet', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '95', name: 'Square Louise-de-Marillac', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '96', name: 'Square Marcel-Sembat', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '97', name: 'Square Léon', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '98', name: 'Aire de jeux Raymond-Queneau', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '99', name: 'Square de la Butte-du-Chapeau-Rouge', address: '263 Rue Saint-Martin', city: 'Paris', district: 18, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '100', name: 'Jardin Compans', address: '263 Rue Saint-Martin', city: 'Paris', district: 19, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '101', name: 'Square Dampierre-Rouvet', address: '263 Rue Saint-Martin', city: 'Paris', district: 19, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '102', name: 'Jardin Flandre-Tanger-Maroc', address: '263 Rue Saint-Martin', city: 'Paris', district: 19, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '103', name: 'Square du Quai-de-la-Loire', address: '263 Rue Saint-Martin', city: 'Paris', district: 19, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '104', name: 'Square du Quai-de-la-Seine', address: '263 Rue Saint-Martin', city: 'Paris', district: 19, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '105', name: 'Square Claude-Bernard', address: '263 Rue Saint-Martin', city: 'Paris', district: 19, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '106', name: 'Square Roger-Coquoin', address: '263 Rue Saint-Martin', city: 'Paris', district: 19, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '107', name: 'Jardin Curial', address: '263 Rue Saint-Martin', city: 'Paris', district: 19, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '108', name: 'Square de la Marseillaise', address: '263 Rue Saint-Martin', city: 'Paris', district: 19, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '109', name: 'Square des Amandiers', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '110', name: 'Square Antoine-Blondin', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '111', name: 'JJardin des Couronnes', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '112', name: 'Square Édouard-Vaillant', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '113', name: 'Square Élisa-Borey', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '114', name: 'Square des Frères-Flavien', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '115', name: 'Square des Grès', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '116', name: 'Square Henri-Karcher', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '117', name: 'Jardin de lHospice-Debrousse', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '118', name: 'Square Léon-Frapié', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '119', name: 'Jardin Naturel—Pierre-Emmanuel', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '120', name: 'Mail de la place Saint-Blaise', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '121', name: 'Jardin dimmeubles de la Porte-de-Vincennes', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '122', name: 'Square Réjane', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '123', name: 'Square des Saints-Simoniens', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '124', name: 'Square de la Salamandre', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '125', name: 'Square Séverine', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },
  { id: '126', name: 'Jardin Casque-dOr', address: '263 Rue Saint-Martin', city: 'Paris', district: 20, image: '/assets/location/square-emile-chautemps.jpg' },





]
