var canvas = null;
val = [];
colors =[];
var w = 5 , ind1 = 0 , ind2 = ind1 + 1 , min_index = ind1;
function SelectionSort(){
    if(canvas == null)
    {
        canvas = new p5( function(p) {
            p.setup = function(){
                p.createCanvas(p.windowWidth - 80, p.windowHeight);
                for(let l = 0 ; l < p.width/w ; l++)
                {
                    val.push(Math.floor(p.random(p.height)));
                    colors.push([255,0,0]);
                }
                colors[0] = [0,0,0];
                ind1 = 0;
                ind2 = ind1 + 1;
                min_index = ind1;
            }
            function swap(val , i1 , i2)
                {
                    var temp = val[i1];
                    val[i1] = val[i2];
                    val[i2] = temp;    
                }
            
            p.draw = function(){
            p.background(48 , 189 , 242);
            if(ind1 < val.length-1)
            {
              if(ind2 < val.length)
              {
                if( val[ind2] < val[min_index])
                {
                  min_index = ind2;
                  colors[min_index] = [255,255,0];
                }
                else
                {
                    colors[ind2] = [250 , 0 , 255];
                }
                ind2++;
              }
              else
              {
                swap(val , min_index , ind1);
                for(var i = ind1 ; i < colors.length ; i++)
                    {
                        colors[i] = [255,0,0];
                    }
                ind1++;
                min_index = ind1;
                ind2 = ind1 + 1;
                colors[ind1]  = [0,0,0];
              }
            }
            else
            {    
                colors[min_index] = [255,0,0];
                p.noLoop();
            }
            for(var i = 0 ; i < val.length ; i++)
            {
                p.fill(colors[i]);
                p.rect(i*w , p.height - val[i] , w , val[i]); 
            }
        }
        },"selection-div");
    }
    else 
    {
        canvas.remove();
        canvas = null;
        val = [];
        colors = [];
        ind1 = 0;
        ind2 = ind1 + 1;
        min_index = ind1;
    }
}