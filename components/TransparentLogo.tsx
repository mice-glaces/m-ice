'use client'

import React, { useEffect, useRef, useState } from 'react'

interface TransparentLogoProps {
    src: string
    alt: string
    className?: string
    height?: number
}

export default function TransparentLogo({ src, alt, className, height = 75 }: TransparentLogoProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [processedSrc, setProcessedSrc] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.src = src

        img.onload = () => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')

            if (!ctx) return

            // Set size based on the original image aspect ratio
            const width = (img.width / img.height) * 400 // Internal high-res
            const internalHeight = 400
            canvas.width = width
            canvas.height = internalHeight

            ctx.drawImage(img, 0, 0, width, internalHeight)

            const imageData = ctx.getImageData(0, 0, width, internalHeight)
            const data = imageData.data

            // Process every pixel
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i]
                const g = data[i + 1]
                const b = data[i + 2]

                // Threshold: If it's very dark (almost black), make it transparent
                // JPG artifacts often mean black isn't 0,0,0, but maybe 5,5,5 or 10,10,10
                if (r < 25 && g < 25 && b < 25) {
                    data[i + 3] = 0 // Alpha = 0
                }
            }

            ctx.putImageData(imageData, 0, 0)
            setProcessedSrc(canvas.toDataURL('image/png'))
            setIsLoading(false)
        }

        img.onerror = () => {
            setIsLoading(false)
        }
    }, [src])

    if (!processedSrc) {
        // Fallback to original while loading or if it fails
        return <img src={src} alt={alt} className={className} style={{ visibility: isLoading ? 'hidden' : 'visible' }} />
    }

    return (
        <img 
            src={processedSrc} 
            alt={alt} 
            className={className} 
            style={{ width: 'auto', height: `${height}px`, objectFit: 'contain' }}
        />
    )
}
