import * as React from 'react';


export interface IAppProps {
  appStartTime: number;
}

export interface IAppState {
}


export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props?: IAppProps, context?: any) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>App</div>
    );
  }
}
