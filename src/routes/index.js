//Layout
import { HeaderOnly } from '../components/Layout';

import Home from '../page/Home';
import Following from '../page/Following';
import Upload from '../page/Upload';

//Public routes

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/following', component: Following },
   { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
