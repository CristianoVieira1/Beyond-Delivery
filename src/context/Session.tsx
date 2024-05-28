import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

import {Session} from '../models/Session';
import LocalStorage from '../persistence/LocalStorage';
import {WithChildren} from '../types';
import {Session as SessionSchema} from '../types/Session';

interface Schema {
  session: SessionSchema;
  removeSession: () => Promise<void>;
  fetchLastSession: () => Promise<void>;
  setSession: Dispatch<SetStateAction<SessionSchema>>;
  handleSignInGoogle: () => Promise<void>;
}

export const SessionContext = createContext<Schema | undefined>(undefined);

export const UserSessionProvider = ({children}: WithChildren) => {
  const [session, setSession] = useState<SessionSchema>({} as SessionSchema);

  const fetchLastSession = async (): Promise<void> => {
    const currentSession = await new Session().get();
    setSession(currentSession);
  };

  const removeSession = async () => {
    await LocalStorage.clean();
    setSession({} as SessionSchema);
  };

  /////google
  const handleSignInGoogle = async (): Promise<void> => {};

  return (
    <SessionContext.Provider
      value={{
        session,
        setSession,
        removeSession,
        fetchLastSession,
        handleSignInGoogle,
      }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('useSession must be used within a UserSessionProvider');
  }

  return context;
};
