var values = [] , colors = [] , biggest;
var ind1 = 0, ind2 = 0 , w = 5 ;
var canvas = null;
function BubbleSort() {
    if(canvas == null)
    {
        canvas = new p5( function(p) {
        p.setup = function() {
            p.createCanvas(p.windowWidth - 80, p.windowHeight);
            for(let l = 0 ; l < p.width/w ; l++)
            {
                values.push(Math.floor(p.random(p.height)));
                colors.push([250,0,0]);
            }
        }
        function swap(arr , ind1 , ind2)
        {
            var temp = arr[ind1];
            arr[ind1] = arr[ind2];
            arr[ind2] = temp; 
        }
        p.draw = function() {
                p.background(48 , 189 , 242);
                if( ind1 < values.length )
                {
                    if( ind2 < values.length - ind1 - 1)
                    {
                    colors[biggest] = [250,0,0];
                    if( values[ind2] > values[ind2+1])
                    {
                        swap(values ,ind2,ind2+1);
                        biggest = ind2+1;
                    }
                    else 
                        biggest = ind2;
                    ind2++;
                    colors[biggest] = [255,255,0];
                    }
                    else
                    {
                    ind2 = 0;
                    ind1++;
                    }
                }
                else
                {
                    colors[biggest] = [250,0,0];
                    p.noLoop();
                    
                }
                for(var l = 0 ; l < values.length ; l++)
                {
                    p.fill(colors[l]);
                    p.rect( l*w , p.height- values[l] , w , values[l] );
                }
            }
        },"bubble-div");
    }
    else 
    {
        canvas.remove();
        canvas = null;
        values = [];
        colors = [];
        ind1 = 0;
        ind2 = 0; 
    }
}