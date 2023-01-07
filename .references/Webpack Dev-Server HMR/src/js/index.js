// Is index supposed to be at the src level or in the js folder? 

if (module.hot) {
    module.hot.accept((err) => {
      if (err) {
        console.error('Cannot apply HMR update.', err);
      }
    });
  }