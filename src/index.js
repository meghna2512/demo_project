import ReactDOM from 'react-dom';
import { makeMainRoutes } from './FrontEnd/routes/routes';
// import { makeMainRoutesInstitute } from './Institute/routes/routes';

// import {suerAdmin} from './SuperAdmin/index';

const routes = makeMainRoutes();
let str = routes.props.children.props.history.location.pathname;
if(str.indexOf('/administrator') > -1){
	// const routesSuperAdmin = makeMainRoutesSuperAdmin();
	// ReactDOM.render(
	// 	SuperAdmin,
	//   document.getElementById('root')
	// );


	// suerAdmin();
}else if(str.indexOf('/admin') > -1){
	// const routesInstitute = makeMainRoutesInstitute();
	ReactDOM.render(
  		//routesInstitute,
  		document.getElementById('root')
	);
}else{
	ReactDOM.render(
  		routes,
  		document.getElementById('root')
	);
}
