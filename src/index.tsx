import { hydrateRoot } from 'react-dom/client';
import App from '@/ui';

const container = document.getElementById('root')!;
hydrateRoot(container, <App />);
