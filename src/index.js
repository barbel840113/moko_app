import _ from 'lodash';
import './style.css';
import Icon from './download.png';
import printMe from './print.js';

function component()
{
     var element = document.createElement('div');
     var btn = document.createElement('button');
     // Loadash, now important by this script
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     element.classList.add('hello');

     var myIcon = new Image();
     myIcon.src = Icon;

     btn.innerHTML = 'Click me and check the console';
     btn.onclick = printMe;

     element.appendChild(btn);

     element.appendChild(myIcon);
     return element;
}

document.body.appendChild(component());