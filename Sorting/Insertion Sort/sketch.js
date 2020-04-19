var canvas = null;
val = [];
colors =[];
var w = 5 , ind1 = 1 , ind2 , key_index ;
function InsertionSort(){
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
                key = val[ind1];
                ind2 = ind1-1;
               // insertion();
            }
            function insertion()
            {
                for(var i = 1; i < val.length ; i++)
                {
                    var key = val[i] , j = i-1;
                    while(j >= 0 && val[j] > key)
                    {
                        val[j+1] = val[j];
                        j--;
                    }
                    val[j+1] = key;
                }
            }
            p.draw = function(){
                p.background(48 , 189 , 242);
                if(ind1 < val.length)
                {
                    if(ind2+2 < val.length && ind2 < ind1-1)
                    {
                        colors[ind2+1] = [255,255,0];
                        colors[ind2+2] = [255,255,0];
                    } 
                    if(ind2 >=0 && val[ind2] > key)
                    {
                        colors[ind2] = [0,0,255];
                        colors[ind2+1] = [0,0,255];
                        val[ind2+1] = val[ind2];
                        ind2--;
                    }
                    else
                    {
                        val[ind2+1] = key;
                        ind1++;
                        key = val[ind1];
                        key_index = ind1;
                        ind2 = ind1-1;
                    }
                }
                else
                {
                    p.noLoop();
                }
                for(var i = 0 ; i < val.length ; i++)
                {
                    if(i === key_index)  colors[i] = [0,0,0];
                    p.fill(colors[i]);
                    p.rect(i*w , p.height - val[i] , w , val[i]); 
                }
            }
        },'insertion-sort.div');
    }
    else
    {
        canvas.remove();
        canvas = null;
        val = [];
        colors = [];
        ind1 = 0;
    }
}