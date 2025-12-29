
import React from 'react';
import { Lottery } from './types';

export const MOCK_LOTTERIES: Lottery[] = [
  {
    id: '1',
    name: 'Mega Fortune',
    jackpot: 2500000,
    drawDate: '2024-11-20T20:00:00',
    ticketPrice: 2,
    participants: 12500,
    status: 'active',
    image: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '2',
    name: 'Emerald Draw',
    jackpot: 500000,
    drawDate: '2024-11-22T18:00:00',
    ticketPrice: 1,
    participants: 8400,
    status: 'active',
    image: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    name: 'Global Gigajackpot',
    jackpot: 15000000,
    drawDate: '2024-11-25T22:00:00',
    ticketPrice: 5,
    participants: 45000,
    status: 'active',
    image: 'https://picsum.photos/800/400?random=3'
  }
];

export const NAV_ITEMS = [
  { label: 'Dashboard', icon: 'dashboard', path: '/' },
  { label: 'My Tickets', icon: 'confirmation_number', path: '/tickets' },
  { label: 'Promotions', icon: 'redeem', path: '/promotions' },
  { label: 'Draw History', icon: 'history', path: '/history' },
  { label: 'Profile', icon: 'person', path: '/profile' },
  { label: 'Help Center', icon: 'help', path: '/help' },
];
