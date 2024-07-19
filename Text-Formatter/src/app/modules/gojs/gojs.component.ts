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

    // Define Node templates
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

    // Define different link templates
    myDiagram.linkTemplateMap.add('curvedLink',
      $(go.Link,
        {
          curve: go.Link.Bezier,
          curviness: 15,  // Curved links
          routing: go.Link.AvoidsNodes
        },
        $(go.Shape, { strokeWidth: 2 },
          new go.Binding('stroke', 'color')),
        $(go.Shape, { toArrow: 'Standard', stroke: null },
          new go.Binding('fill', 'color'))
      )
    );

    myDiagram.linkTemplateMap.add('straightLink',
      $(go.Link,
        {
          curve: go.Link.None,  // Straight links
          routing: go.Link.AvoidsNodes
        },
        $(go.Shape, { strokeWidth: 2 },
          new go.Binding('stroke', 'color')),
        $(go.Shape, { toArrow: 'Standard', stroke: null },
          new go.Binding('fill', 'color'))
      )
    );

    myDiagram.linkTemplateMap.add('orthogonalLink',
      $(go.Link,
        {
          curve: go.Link.None,  // Orthogonal links
          routing: go.Link.AvoidsNodes,
          corner: 1  // Use corner to make orthogonal turns
        },
        $(go.Shape, { strokeWidth: 2 },
          new go.Binding('stroke', 'color')),
        $(go.Shape, { toArrow: 'Standard', stroke: null },
          new go.Binding('fill', 'color'))
      )
    );

    // Define the model with link types
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
        { from: 'Rubiscape', to: 'Rubiconnect', color: '#FF00FF', category: 'straightLink' },
        { from: 'Rubiscape', to: 'Rubistudio', color: '#FF00FF', category: 'orthogonalLink' },
        { from: 'Rubiscape', to: 'Rubisight', color: '#FF00FF', category: 'straightLink' },
        { from: 'Rubistudio', to: 'Workflows', color: '#FF4500', category: 'curvedLink' },
        { from: 'Rubistudio', to: 'Workbooks', color: '#FF4500', category: 'curvedLink' },
        { from: 'Rubisight', to: 'Dashboard', color: '#0000FF', category: 'orthogonalLink' },
        { from: 'Workflows', to: 'Models', color: '#000000', category: 'straightLink' },
        { from: 'Workbooks', to: 'Models', color: '#000000', category: 'straightLink' },
        { from: 'Workbooks', to: 'Reusable Code', color: '#000000', category: 'orthogonalLink' },
      ]
    );
  }
}
