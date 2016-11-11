import React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
// import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import DiffMonitor from 'redux-devtools-diff-monitor';
import MultipleMonitors from 'redux-devtools-multiple-monitors';
import Dispatcher from 'redux-devtools-dispatch';
import SliderMonitor from "redux-devtools-slider-monitor";

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  <DockMonitor
    toggleVisibilityKey="ctrl-d"
    changePositionKey="alt-d"
    defaultIsVisible
  >
    <MultipleMonitors>
      <Dispatcher />
      <DiffMonitor theme='tomorrow' />
      <SliderMonitor keyboardEnabled />
    </MultipleMonitors>
  </DockMonitor>
);

export default DevTools;
/* <DockMonitor
    toggleVisibilityKey='ctrl-l'
    changePositionKey='alt-l'
    defaultIsVisible
  >
    <LogMonitor theme='tomorrow' />
  </DockMonitor> */
