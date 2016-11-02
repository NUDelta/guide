import config from '../universal/config';
import createMainRoutes from '../universal/routes/mainRoutes';
import createHome from './components/home/home';
import createHeader from './components/header/header';
import createConcepts from './components/concepts/concepts';
import createConceptsNew from './components/conceptsNew/conceptsNew';

createMainRoutes(FlowRouter);
createHome(Template);
createHeader(Template);
createConcepts(Template);
createConceptsNew(Template);
