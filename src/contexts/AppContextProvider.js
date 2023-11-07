// src/contexts/AppContextProvider.js
import React from 'react';
import { PropertiesProvider } from './PropertiesContext';
import { UserProvider } from './UserContext';
import { combineComponents } from '../utils/combineComponents';

const providers = [PropertiesProvider, UserProvider];

export const AppContextProvider = combineComponents(...providers);