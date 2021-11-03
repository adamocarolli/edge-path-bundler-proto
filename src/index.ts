import "./index.d";
import { EdgePathBundling } from './lib/epb';
import {GraferController} from '@uncharted.software/grafer';

async function renderBundledEdges(container: HTMLElement): Promise<void> {
  const { width, height } = container.getBoundingClientRect();
  const canvas = document.querySelector('.grafer_container') as HTMLCanvasElement;

  const data = await import("./data/migrations.json");
  const nodesData = data['nodes'];
  const linksData = data['links'];

  const EBP = new EdgePathBundling(nodesData, linksData, width, height);
  EBP.bundle();
  EBP.subdivision();

  // Format edge bundle path data for Grafer consumption
  const pointsData = [];
  for (const node of nodesData) {
    pointsData.push(node);
  }
  const controlPoints = new Map();
  for (const link of linksData) {
    link.control = link.controlpoints.map(p => `c-${p.x}, ${p.y}`);
    for (const controlPt of link.controlpoints) {
      controlPoints.set(`c-${controlPt.x}, ${controlPt.y}`, controlPt);
    }
  }
  controlPoints.forEach((coord, id) => {
    pointsData.push({id, x: coord.x, y: coord.y});
  });
  for (const p of pointsData) {
    // y-axis in WebGL is opposite to that of planar coordinates
    p.y = -p.y;
  }

  const points = {
    data: pointsData,
  };
  const nodes = {
      data: nodesData.map(n =>({point: n.id})),
  };
  const edges = {
    type: 'CurvedPath',
    options: {
      alpha: 0.15,
    },
    data: linksData,
  };

  const layers = [
      { nodes, edges },
  ];

  new GraferController(canvas, { points, layers });
}
renderBundledEdges(document.body);

import "./style.css";
