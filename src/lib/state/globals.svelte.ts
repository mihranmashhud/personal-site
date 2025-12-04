let seenLoadingScreen = $state(false);

export const global = {
  get seenLoadingScreen() {
    return seenLoadingScreen;
  },
  set seenLoadingScreen(value) {
    if (seenLoadingScreen !== value) {
      seenLoadingScreen = value;
    }
  }
};
