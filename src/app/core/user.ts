import { Type } from '@angular/core';

export interface Roles { 
    admin?: boolean;
    owner?: boolean;
    worker?: boolean;
 }
  
export interface User {
    email: string;
    password: string;
    roles: Roles;
    type: string;
}