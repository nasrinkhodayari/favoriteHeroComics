const createStore = (reducer:any) => {
    let listeners: any[] = [];
    let currentState = reducer(undefined, {});

    return {
      getState: () => currentState,
      dispatch: (action: any) => {
        currentState = reducer(currentState, action);

        listeners.forEach((listener) => {
          listener();
        });
      },
      subscribe: (newListener: any) => {
        listeners.push(newListener);

        const unsubscribe = () => {
          listeners = listeners.filter((l) => l !== newListener);
        };

        return unsubscribe;
      }
    };
  };

  export default createStore;