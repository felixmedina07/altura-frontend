const getCollition=(width, height, enemyWidth, enemyHeight, side)=>{
    const minCollitionX=enemyWidth/resize(100, 'width')
    const minCollitionY=enemyHeight/resize(100, 'height')
    if(width>height && minCollitionX<width){
        return side.x
    }
    if(height>width && minCollitionY<height){
        return side.y
    }
    return
}

const getCollitionSide=(first, second)=>{
    const horizontalCollition=(first?.position?.x + first?.crop?.widthR)-(second?.position?.x + second?.crop?.widthR)
    const verticalCollition=(first?.position?.y + first?.crop?.heightR)-(second?.position?.y + second?.crop?.heightR)

    let width=0
    let height=0
    let side={x:'none',y:'none'}

    if(Math.sign(horizontalCollition)<=0 && Math.sign(verticalCollition)===-1){
        width=Math.abs((first?.position?.x + first?.crop?.widthR)-second?.position?.x)
        height=Math.abs((first?.position?.y + first?.crop?.heightR)-second?.position?.y)
        side={y:'right',x:'buttom'}
    }

    if(Math.sign(horizontalCollition)>=0 && Math.sign(verticalCollition)>=0){
        width=Math.abs((first?.position?.x - first?.crop?.widthR)-second?.position?.x)
        height=Math.abs((first?.position?.y - first?.crop?.heightR)-second?.position?.y) 
        side={y:'left',x:'top'}
    }

    if(Math.sign(horizontalCollition)===-1 && Math.sign(verticalCollition)>=0){
        width=Math.abs((first?.position?.x + first?.crop?.widthR)-second?.position?.x)
        height=Math.abs((first?.position?.y - first?.crop?.heightR)-second?.position?.y)  
        side={y:'right',x:'top'}
    }

    if(Math.sign(horizontalCollition)>=0 && Math.sign(verticalCollition)===-1){
        width=Math.abs((first?.position?.x - first?.crop?.widthR)-second?.position?.x)
        height=Math.abs((first?.position?.y + first?.crop?.heightR)-second?.position?.y)  
        side={y:'left',x:'buttom'}
    }

    const collition=getCollition(width, height, first.crop.widthR, first.crop.heightR, side)
    return collition
}

const collition=(first, second)=>{
    return (
        first?.position?.x + first?.crop?.widthR >= second?.position?.x &&
        first?.position?.x <= second?.position?.x + second?.crop?.widthR &&
        first?.position?.y + first?.crop?.heightR >= second?.position?.y &&
        first?.position?.y <= second?.position?.y + second?.crop.heightR 
    )
}

const motionDecision=(collition)=>{

    if(collition.some((a)=>a==='right') && collition.some((a)=>a==='buttom' && collition.some((a)=>a==='top'))){
        return 'none'
    }

    if(collition.some((a)=>a==='right') && collition.some((a)=>a==='top')){
        return 'buttom'
    }
    
    if(collition.some((a)=>a==='right') && collition.some((a)=>a==='buttom')){
        return 'top'
    }

    if(collition.some((a)=>a==='right')){
        return 'random'
    }

    return 'forward'
}