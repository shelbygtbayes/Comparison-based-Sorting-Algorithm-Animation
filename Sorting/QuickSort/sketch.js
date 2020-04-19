arr = [];
var color_States = [];
var w = 5;
var canvas = null;
function Quicksort() {
    if(canvas == null)
    {
        canvas = new p5( function (p) {
        p.setup =  function(){
            p.createCanvas(p.windowWidth - 80, p.windowHeight);
            for(var l = 0 ; l < p.width/w ; l++)
                {
                    arr.push(Math.floor(p.random(p.height)));
                    color_States[l] = -1;
                }
            quicksort(arr , 0 , arr.length-1);    
        }
    async function swap(arr , a , b)
    {
        await sleep(100);
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    async function partition(arr , st , end)
    {  
        var pivotIndex = st  , pivot = arr[end]; 
        for(let ind = st ; ind <= end ; ind++)
        {
            color_States[ind] = 1;
        }
        color_States[pivotIndex] = 0;
        for(var ind_ = st; ind_ < end ; ind_++)
        {
            if(arr[ind_] < pivot)
            {
            await swap(arr , ind_ , pivotIndex);
            color_States[pivotIndex] = -1;
            pivotIndex++;
            color_States[pivotIndex] = 0;
            }
        }
        await swap(arr , pivotIndex , end);
        for(let ind = st ; ind <= end ; ind++)
        {
            if(ind != pivotIndex)
                color_States[ind] = -1;
        }
        return pivotIndex;
    }
    async function quicksort(arr , st , end)
    {
        if(st < end) 
        {
            let pivot = await partition(arr , st , end);
            color_States[pivot] = -1;
            await Promise.all([
                quicksort(arr , st , pivot-1),
                quicksort(arr , pivot+1 , end)
            ]);
        }
    }
    p.draw = function(){
        p.background(48 , 189 , 242);
        
        for(var l = 0 ; l < arr.length ; l++)
        {
            if(color_States[l] == 0)
            {
                p.fill(255,255,255);
            }
            else if(color_States[l] == 1)
            {
                p.fill(255,0,0);
            }
            else
            {
                p.fill(255,255,0);
            }
            p.rect(l*w , p.height-arr[l] , w , arr[l]);
        }
    }
    function sleep(ms)
    {
            return new Promise(resolve => setTimeout(resolve,ms));
    }
        }, "quick-div");
    }
    else
    {
        canvas.remove();
        canvas = null;
        arr = [];
        color_States = [];
    }
}