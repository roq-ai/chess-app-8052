import { GameInterface } from 'interfaces/game';
import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface GamePlayerInterface {
  id?: string;
  game_id: string;
  player_id: string;
  created_at?: any;
  updated_at?: any;

  game?: GameInterface;
  player?: PlayerInterface;
  _count?: {};
}

export interface GamePlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  game_id?: string;
  player_id?: string;
}
