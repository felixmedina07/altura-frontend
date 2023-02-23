class Tower extends Sprite{
    constructor({position={x:0, y:0}}){
        super({
            position, 
            imageSrc: ImagesLoded.enemyTowerOpenedOne,
            frames: {
                maxX: 15,
                maxY: 4
            },
        })
        this.frame.current={
            x:0,
            y:0
        }
        this.start=false
    }

    rePotition({position}){
        this.position=position
    }

    update(){
        this.drawBySegment({
            imageX: this.frame.current.x, 
            imageY: this.frame.current.y
        },
        this.position,
        {
            width: this.resize(480, 'width'),
            height: this.resize(1440, 'height')
        })
        if(this.start){
            if(this.frame.current.x < this.frame.maxX-1){
                super.update(()=>this.frame.current.x++)
                return
            }
            if(this.frame.current.y < this.frame.maxY-2){
                super.update(()=>{
                    this.frame.current.x=0
                    this.frame.current.y++
                })
            }
        }
    }

    startAnimation(){
        this.start=!this.start
    }
}