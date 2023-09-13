const mapping: Record<string, string> = {
  companies: 'company',
  games: 'game',
  'game-players': 'game_player',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
