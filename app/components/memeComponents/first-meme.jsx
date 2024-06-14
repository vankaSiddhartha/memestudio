"use client"
import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const DrakeMeme = ({ topText, bottomText }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    const imageUrl = '/drake.jpg';
    const canvasWidth = 1080; // Instagram post max width
    const canvasHeight = 1350; // Instagram post min height, adjusted for a square aspect ratio

    fabric.Image.fromURL(imageUrl, (img) => {
      canvas.setDimensions({ width: canvasWidth, height: canvasHeight });
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
        scaleX: canvasWidth / img.width,
        scaleY: canvasHeight / img.height,
      });

      const topTextObj = new fabric.Text(topText, {
        fontFamily: 'Arial',
        fontSize: 36,
        fontWeight: 'bold',
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
        left: canvasWidth / 2,
        top: canvasHeight * 0.1,
        textAlign: 'center',
      });

      const bottomTextObj = new fabric.Text(bottomText, {
        fontFamily: 'Arial',
        fontSize: 36,
        fontWeight: 'bold',
        fill: 'white',
        stroke: 'black',
        strokeWidth: 2,
        left: canvasWidth / 2,
        top: canvasHeight * 0.9,
        textAlign: 'center',
      });

      canvas.add(topTextObj, bottomTextObj);
      canvas.renderAll();
    });

    // Log the canvas state to JSON for debugging purposes
    console.log(canvas.toJSON());
  }, [topText, bottomText]);

  return <canvas ref={canvasRef} />;
};

export default DrakeMeme;
