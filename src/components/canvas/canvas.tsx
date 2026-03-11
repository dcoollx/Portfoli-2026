import React, { useEffect, useRef, useState } from "react";
import { Stage, RegularPolygon, Layer } from 'react-konva'
import Konva from 'konva'

export const Canvas = () => {
    const [{width, height}, setDemension] = useState({width: window.innerWidth, height: window.innerHeight})
    const shapes: React.RefObject<any>[] = [];
    const numberOfShapes = 25
    for(let x = 0; x < numberOfShapes; x++){
        const ref = useRef<Konva.RegularPolygon>(null);
        shapes.push(ref)
    }
    useEffect(()=>{
        window.addEventListener('reszie', ()=>{
            setDemension({width: window.innerWidth, height: window.innerHeight})
        })
        shapes.forEach(s=>{
            s.current?.setAttr('xvelocity', Math.random()) // so that each triangle can manage its own speed, set it as an attribut on the object
            s.current?.setAttr('yvelocity', Math.random())
            s.current?.x( Math.random() * width)
            s.current?.y( Math.random() * height)
            s.current?.radius(Math.random() * 100)
            s.current?.rotate(Math.random() * 1000);
            s.current?.opacity(Math.random());
    })
        //const velecity = 1 as const
        const anim = new Konva.Animation((frame)=>{ // the animation, this fires every frame
            const time = frame.time;
            const delta = frame.timeDiff;
            const frameRate = frame.frameRate;
            shapes.forEach(s=>{
                let vx, vy;
                if(!s) return;
                const shape = s.current!;
                const currentPos = shape.getPosition()
                if(currentPos.x > width || currentPos.x < 0) shape.setAttr('xvelocity', -1 * Number(shape.getAttr('xvelocity')))
                if(currentPos.y > height || currentPos.y < 0) shape.setAttr('yvelocity', -1 * Number(shape.getAttr('yvelocity')))

                const xvelocity = Number(s.current?.getAttr('xvelocity'))
                const yvelocity = Number(s.current?.getAttr('yvelocity'))  
                
                shape.x(currentPos.x + xvelocity);
                shape.y(currentPos.y + yvelocity)
            })
        }, shapes[0]!.current!.getLayer());
        anim.start()
        return () => {
             anim.stop
             window.removeEventListener('resize', ()=>{
            setDemension({width: window.innerWidth, height: window.innerHeight})
        })
        }
    }, [])
    return (
        <Stage style={{ position: 'absolute'}} width={width} height={height}>
            <Layer>
            {Array.from({ length: numberOfShapes }).map((v, i)=>(
                <RegularPolygon cornerRadius={10} data-velecity={1} ref={shapes[i]} key={i} sides={3}  fill="#4183c4" radius={100}/>
            ))}
            </Layer>
        </Stage>
    )
}