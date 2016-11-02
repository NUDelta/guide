import config from '../universal/config';
import createMainRoutes from '../universal/routes/mainRoutes';
import createHome from './components/home/home';
import createHeader from './components/header/header';
import createConcepts from './components/concepts/concepts';
import createConceptsNew from './components/conceptsNew/conceptsNew';
import createConceptsDelete from './components/conceptsDelete/conceptsDelete';

createMainRoutes(FlowRouter);
createHome(Template);
createHeader(Template);
createConcepts(Template);
createConceptsNew(Template);
createConceptsDelete(Template);
