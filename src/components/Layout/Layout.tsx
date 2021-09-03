import React from 'react';

interface ILayoutProps {
  navbar: JSX.Element;
  body: JSX.Element;
}

export default function Layout({ navbar, body }: ILayoutProps): JSX.Element {
  return (
    <>
      <div>
        <div>{navbar}</div>
        <div>{body}</div>
      </div>
    </>
  );
}
