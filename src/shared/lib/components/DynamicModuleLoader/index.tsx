import React, { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from '@/app/providers/storeProvider';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

export interface IDynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
  children: React.ReactNode;
}

const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
  const { reducers, removeAfterUnmount = true, children } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      // store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  );
};

export default DynamicModuleLoader;
