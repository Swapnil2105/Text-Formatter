import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-gojs',
  templateUrl: './gojs.component.html',
  styleUrls: ['./gojs.component.scss']
})
export class GojsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initDiagram();
  }

  initDiagram(): void {
    const $ = go.GraphObject.make;  

    const myDiagram = $(go.Diagram, 'myDiagramDiv',  
      {
        'undoManager.isEnabled': true,  
        layout: $(go.LayeredDigraphLayout, { direction: 90, layerSpacing: 40 })
      });

    // define a simple Node template
    myDiagram.nodeTemplateMap.add('Rectangle',
      $(go.Node, 'Auto',
        $(go.Shape, 'Rectangle', { strokeWidth: 1, fill: 'white' },
          new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 8, font: 'bold 14px sans-serif', stroke: '#333' },
          new go.Binding('text', 'key'))
      )
    );

    myDiagram.nodeTemplateMap.add('RoundedRectangle',
      $(go.Node, 'Auto',
        $(go.Shape, 'RoundedRectangle', { strokeWidth: 1, fill: 'lightgrey' },
          new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 8, font: 'bold 14px sans-serif', stroke: '#333' },
          new go.Binding('text', 'key'))
      )
    );

    myDiagram.nodeTemplateMap.add('Ellipse',
      $(go.Node, 'Auto',
        $(go.Shape, 'Ellipse', { strokeWidth: 1, fill: 'white' },
          new go.Binding('fill', 'color')),
        $(go.TextBlock, { margin: 8, font: 'bold 14px sans-serif', stroke: '#333' },
          new go.Binding('text', 'key'))
      )
    );

    myDiagram.nodeTemplateMap.add('Diamond',
      $(go.Node, 'Auto',
        $(go.Shape, 'Diamond', { strokeWidth: 1, fill: 'white' },
          new go.Binding('fill', 'color')),
        $(go.TextBlock, { width: 70, height: 40, margin: 4, font: 'bold 14px sans-serif', stroke: '#333' },
          new go.Binding('text', 'key'))
      )
    );

    myDiagram.linkTemplate =
      $(go.Link,
        // {
        //   curve: go.Link.Bezier,
        //   curviness: 20, // Adjust curviness for better fitting links
        //   routing: go.Link.AvoidsNodes
        // },
        $(go.Shape, { strokeWidth: 2 },
          new go.Binding('stroke', 'color')),
        $(go.Shape, { toArrow: 'Standard', stroke: null },
          new go.Binding('fill', 'color'))
      );

    myDiagram.model = new go.GraphLinksModel(
      [
        { key: 'Rubiscape', color: '#FF69B4', category: 'Rectangle' },
        { key: 'Rubiconnect', color: '#FFA500', category: 'Rectangle' },
        { key: 'Rubistudio', color: '#FFA500', category: 'Rectangle' },
        { key: 'Rubisight', color: '#FFA500', category: 'Rectangle' },
        { key: 'Workflows', color: '#D3D3D3', category: 'RoundedRectangle' },
        { key: 'Workbooks', color: '#D3D3D3', category: 'RoundedRectangle' },
        { key: 'Dashboard', color: '#D3D3D3', category: 'RoundedRectangle' },
        { key: 'Models', color: '#FFFFFF', category: 'Ellipse' },
        { key: 'Reusable Code', color: '#FFFFFF', category: 'Diamond' }
      ],
      [
        { from: 'Rubiscape', to: 'Rubiconnect', color: '#FF00FF' },
        { from: 'Rubiscape', to: 'Rubistudio', color: '#FF00FF' },
        { from: 'Rubiscape', to: 'Rubisight', color: '#FF00FF' },
        { from: 'Rubistudio', to: 'Workflows', color: '#FF4500' },
        { from: 'Rubistudio', to: 'Workbooks', color: '#FF4500' },
        // { from: 'Rubicconnect', to: 'Workflows', color: '#FF4500' },
        { from: 'Rubisight', to: 'Dashboard', color: '#0000FF' },
        { from: 'Workflows', to: 'Models', color: '#000000' },
        { from: 'Workbooks', to: 'Reusable Code', color: '#000000' },
      ]);
  }
}
