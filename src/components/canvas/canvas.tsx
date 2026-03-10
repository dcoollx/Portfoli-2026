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
            s.current?.setAttr('xvelocity', 1)
            s.current?.setAttr('yvelocity', 1)
            s.current?.x( Math.random() * width)
            s.current?.y( Math.random() * height)
            s.current?.radius(Math.random() * 100)
            s.current?.rotate(Math.random() * 1000);
            s.current?.opacity(Math.random());
    })
        //const velecity = 1 as const
        const anim = new Konva.Animation((frame)=>{
            const time = frame.time;
            const delta = frame.timeDiff;
            const frameRate = frame.frameRate;
            shapes.forEach(s=>{
                let vx, vy;
                if(!s) return;
                const shape = s.current!;
                const currentPos = shape.getPosition()
                if(currentPos.x > width){
                    shape.setAttr('xvelocity', -1)
                }
                if(currentPos.y > height) shape.setAttr('yvelocity', -1)
                if(currentPos.x < 0){
                    shape.setAttr('xvelocity', 1)
                }
                if(currentPos.y < 0) shape.setAttr('yvelocity', 1)

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
                <RegularPolygon cornerRadius={10} data-velecity={1} ref={shapes[i]} key={i} sides={3} stroke="blue" fill="blue" radius={100}/>
            ))}
            </Layer>
        </Stage>
    )
}