// Liberapp 2020 - Tahiti Katagai
// タイル

const TilePerW = 0.10;
const TileColor0 = 0xff40d0;
const TileColor1 = 0xd040ff;
const TileColor2 = 0x80ffe0;

class Tile extends GameObject{

    static tiles:Tile[] = [];
    static colors:number[] = [ TileColor0, TileColor1, TileColor2 ];

    size:number;
    color:number;

    constructor( x:number, y:number ) {
        super();

        Tile.tiles.push(this);
        this.size = Util.w(TilePerW);
        this.color = Tile.colors[ randI( 0, Tile.colors.length ) ];
        this.setShape(x, y);
    }

    onDestroy(){
        Tile.tiles = Tile.tiles.filter( obj => obj != this );
    }

    setShape(x:number, y:number){
        this.display = new egret.Shape();
        GameObject.gameDisplay.addChild(this.display);
        let shape = this.display as egret.Shape;
        shape.x = x;
        shape.y = y;
        shape.graphics.lineStyle( 10, this.color );
        // shape.graphics.beginFill(TileColor);
        const s = this.size;
        shape.graphics.drawRect(-0.5*s, -0.5*s, s, s );
        shape.graphics.lineStyle( 3, 0xffffff);
        shape.graphics.drawRect(-0.5*s, -0.5*s, s, s );
        // shape.graphics.endFill();
        shape.rotation = 45;
    }

    update() {
        if( GameOver.I ) return;
        
        if( this.checkTouch() ) {
            this.defeated();
            return;
        }

        this.Y += Game.I.speed;

        // 通過みのがし
        if( this.checkFall() ){
            new GameOver();
            // this.destroy();
        }
    }

    checkTouch():boolean {
        if( Game.I.press ){
            const ss = (this.size*1.5) ** 2; //(this.size*0.5) ** 2;
            if( (Game.I.tapX - this.X ) ** 2 + (Game.I.tapY - this.Y ) ** 2 <= ss ){
                return true;
            }
        }
    }
    checkFall():boolean{
        // return ( this.Y >= Util.height + this.sizeH * 0.5 );
        return this.Y > Util.height;
    }

    defeated(){
        this.destroy();
        SoundEffect.I.play( randI( 0, 6 ) );

        Score.I.addPoint( this.getPoint( this.Y ) );

        for( let i=0 ; i<4 ; i++ ){
            // new Debris( this.X, this.Y );
            let vx = randF( -1, +1 ) * 20;
            let vy = randF( -1, +1 ) * 20;
            let s = this.size * randF( 0.2, 1.0 );
            new EffectFrame( this.X + vx, this.Y + vy, s, s, this.color, 0.7, 1/4, 1/8, vx, vy );
        }
    }

    getPoint( y:number ){
        let d = Math.abs( BaseLineY - y );

        if( d <= 32 )  return Beat.Perfect;
        if( d <= 64 )  return Beat.Great;
        return Beat.Good;
    }
}

