// App.tsx
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// App.tsx
export { default } from 'expo-router/entry';
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);