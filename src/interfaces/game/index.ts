import { GamePlayerInterface } from 'interfaces/game-player';
import { PlayerInterface } from 'interfaces/player';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GameInterface {
  id?: string;
  name: string;
  rules?: string;
  player_limit?: number;
  status: string;
  company_id: string;
  admin_id: string;
  created_at?: any;
  updated_at?: any;
  game_player?: GamePlayerInterface[];
  player?: PlayerInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    game_player?: number;
    player?: number;
  };
}

export interface GameGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  rules?: string;
  status?: string;
  company_id?: string;
  admin_id?: string;
}
