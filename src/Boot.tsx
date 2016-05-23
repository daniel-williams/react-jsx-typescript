import * as React from 'react';
import * as ReactDom from 'react-dom';

import App, {IAppProps, IAppState} from './App';


class Boot {
    public main() {
        let root = document.createElement('div');
        root.style.height = '100vh';
        root.style.width = '100vw';
        document.body.appendChild(root);

        let props: IAppProps = {
            appStartTime: new Date().getTime()
        };

        let app = React.createElement<IAppProps>(App, props);
        ReactDom.render(app, root);
    }
}

new Boot().main();