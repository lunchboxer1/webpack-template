import './style/style.css';
import msgComponent from './comps/msg/msg';
import printMe from './comps/print/print';

function content() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.textContent = 'Hello webpackererer';

  btn.textContent = 'Click me and check the console';

  printMe();

  element.appendChild(btn);

  const msg = msgComponent();
  element.appendChild(msg.getComponent());

  btn.onclick = () => {
    console.log('Hey');
    msg.deactivate();
  };

  return element;
}

document.body.appendChild(content());
