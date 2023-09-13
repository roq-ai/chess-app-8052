import { GamePlayerInterface } from 'interfaces/game-player';
import { GameInterface } from 'interfaces/game';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  username: string;
  score?: number;
  status: string;
  game_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  game_player?: GamePlayerInterface[];
  game?: GameInterface;
  user?: UserInterface;
  _count?: {
    game_player?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  username?: string;
  status?: string;
  game_id?: string;
  user_id?: string;
}
